/**
 * Pure business logic for EventHive: filtering, sorting, bookmarking, and validation.
 * Compatible with Node.js test runner and browser ES modules.
 */

export interface EventItem {
  id: string;
  title: string;
  college: string;
  category: string;
  mode: 'In-Person' | 'Online' | 'Hybrid';
  date: string; // ISO date string or formatted date
  time: string;
  venue: string;
  deadline: string;
  eligibility: string;
  fee: string;
  prizes?: string;
  image: string;
  registrationUrl: string;
  description: string;
  featured?: boolean;
}

/**
 * Filter events by search keyword, category, and participation mode
 */
export function filterEvents(
  events: EventItem[],
  filters: { query?: string; category?: string; mode?: string }
): EventItem[] {
  const query = (filters.query || '').trim().toLowerCase();
  const category = (filters.category || 'all').toLowerCase();
  const mode = (filters.mode || 'all').toLowerCase();

  return events.filter(evt => {
    // Category match
    if (category !== 'all' && evt.category.toLowerCase() !== category) {
      return false;
    }

    // Mode match
    if (mode !== 'all' && evt.mode.toLowerCase() !== mode) {
      return false;
    }

    // Keyword match across title, college, description, and venue
    if (query) {
      const matchTitle = evt.title.toLowerCase().includes(query);
      const matchCollege = evt.college.toLowerCase().includes(query);
      const matchVenue = evt.venue.toLowerCase().includes(query);
      const matchDesc = evt.description.toLowerCase().includes(query);
      const matchCategory = evt.category.toLowerCase().includes(query);
      if (!matchTitle && !matchCollege && !matchVenue && !matchDesc && !matchCategory) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Sort events by criteria: 'date-asc', 'date-desc', 'deadline', 'title-asc'
 */
export function sortEvents(events: EventItem[], sortBy: string): EventItem[] {
  const list = [...events];
  switch (sortBy) {
    case 'date-asc':
      return list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    case 'date-desc':
      return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    case 'deadline':
      return list.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
    case 'title-asc':
      return list.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return list;
  }
}

/**
 * Toggle bookmark ID in a list of bookmarked IDs
 */
export function toggleBookmark(bookmarks: string[], eventId: string): { bookmarks: string[]; isSaved: boolean } {
  const exists = bookmarks.includes(eventId);
  if (exists) {
    return {
      bookmarks: bookmarks.filter(id => id !== eventId),
      isSaved: false
    };
  } else {
    return {
      bookmarks: [...bookmarks, eventId],
      isSaved: true
    };
  }
}

export type UserRole = 'student' | 'organizer' | 'admin';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  password?: string;
  department?: string;
  enrollmentId?: string;
  phone?: string;
  avatarText: string;
}

export interface StudentRegistration {
  id: string;
  eventId: string;
  eventTitle: string;
  studentEmail: string;
  studentName: string;
  enrollmentId: string;
  phone: string;
  branch: string;
  year?: string;
  registeredAt: string;
  ticketNumber: string;
  status: 'Confirmed' | 'Waitlisted' | 'Cancelled';
}

export interface RolePermissions {
  canRegister: boolean;
  canCreateEvent: boolean;
  canEditEvent: boolean;
  canDeleteEvent: boolean;
  canViewRegistrations: boolean;
  canApproveEvents: boolean;
  canManageSystem: boolean;
  roleTitle: string;
  badgeLabel: string;
}

/**
 * Default pre-seeded users for SPSU Udaipur
 */
export function getDefaultUsers(): UserAccount[] {
  return [
    {
      id: 'usr-student-01',
      name: 'Anirudhh',
      email: 'student@spsu.ac.in',
      password: 'student123',
      role: 'student',
      enrollmentId: 'SPSU/2023/CSE/042',
      department: 'Dept. of Computer Science & Engineering (3rd Year)',
      phone: '+91 98290 12345',
      avatarText: 'AN'
    },
    {
      id: 'usr-organizer-01',
      name: 'Piyush',
      email: 'organizer@spsu.ac.in',
      password: 'organizer123',
      role: 'organizer',
      enrollmentId: 'SPSU/FAC/SAC/019',
      department: 'Student Activity Council (SAC) & CSE Coding Club',
      phone: '+91 94140 56789',
      avatarText: 'PY'
    },
    {
      id: 'usr-admin-01',
      name: 'DS Chouhan',
      email: 'admin@spsu.ac.in',
      password: 'admin123',
      role: 'admin',
      enrollmentId: 'SPSU/ADM/DEAN/004',
      department: 'Dean of Student Affairs & Campus Administration, SPSU Udaipur',
      phone: '+91 94141 89012',
      avatarText: 'DC'
    }
  ];
}

/**
 * Returns role permissions based on current user role
 */
export function getUserPermissions(role?: UserRole): RolePermissions {
  switch (role) {
    case 'admin':
      return {
        canRegister: true,
        canCreateEvent: true,
        canEditEvent: true,
        canDeleteEvent: true,
        canViewRegistrations: true,
        canApproveEvents: true,
        canManageSystem: true,
        roleTitle: 'University Administrator',
        badgeLabel: '🛡️ Admin'
      };
    case 'organizer':
      return {
        canRegister: true,
        canCreateEvent: true,
        canEditEvent: true,
        canDeleteEvent: true,
        canViewRegistrations: true,
        canApproveEvents: false,
        canManageSystem: false,
        roleTitle: 'Event Organizer / Club Lead',
        badgeLabel: '📋 Organizer'
      };
    case 'student':
    default:
      return {
        canRegister: true,
        canCreateEvent: false,
        canEditEvent: false,
        canDeleteEvent: false,
        canViewRegistrations: false,
        canApproveEvents: false,
        canManageSystem: false,
        roleTitle: 'University Student',
        badgeLabel: '🎓 Student'
      };
  }
}

/**
 * Authenticates user by email or enrollment ID and password
 */
export function authenticateUser(
  users: UserAccount[],
  identifier: string,
  password: string
): UserAccount | null {
  const cleanId = identifier.trim().toLowerCase();
  const found = users.find(
    u => (u.email.toLowerCase() === cleanId || (u.enrollmentId && u.enrollmentId.toLowerCase() === cleanId)) &&
         u.password === password
  );
  return found || null;
}

/**
 * Registers student for an event and returns generated ticket pass
 */
export function registerStudentForEvent(
  registrations: StudentRegistration[],
  data: {
    eventId: string;
    eventTitle: string;
    studentEmail: string;
    studentName: string;
    enrollmentId: string;
    phone: string;
    branch: string;
    year?: string;
  }
): { success: boolean; registration?: StudentRegistration; error?: string } {
  // Check if already registered
  const existing = registrations.find(
    r => r.eventId === data.eventId && r.studentEmail.toLowerCase() === data.studentEmail.toLowerCase() && r.status !== 'Cancelled'
  );
  if (existing) {
    return {
      success: false,
      error: 'You are already registered for this event. Your pass is ready in "My Registrations".'
    };
  }

  // Generate unique pass number
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const ticketNumber = `SPSU-TKT-2026-${randomSuffix}`;

  const registration: StudentRegistration = {
    id: `reg-${Date.now()}-${randomSuffix}`,
    eventId: data.eventId,
    eventTitle: data.eventTitle,
    studentEmail: data.studentEmail,
    studentName: data.studentName,
    enrollmentId: data.enrollmentId,
    phone: data.phone,
    branch: data.branch,
    year: data.year || '3rd Year',
    registeredAt: new Date().toISOString(),
    ticketNumber,
    status: 'Confirmed'
  };

  return {
    success: true,
    registration
  };
}

/**
 * Cancel a registration
 */
export function cancelRegistration(
  registrations: StudentRegistration[],
  registrationId: string
): StudentRegistration[] {
  return registrations.map(reg => {
    if (reg.id === registrationId) {
      return { ...reg, status: 'Cancelled' as const };
    }
    return reg;
  });
}

/**
 * Validate new or edited event input
 */
export function validateEventData(data: Partial<EventItem>): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.title || data.title.trim().length < 3) {
    errors.title = 'Event title must be at least 3 characters.';
  }
  if (!data.college || data.college.trim().length < 2) {
    errors.college = 'College/University name is required.';
  }
  if (!data.category) {
    errors.category = 'Please select an event category.';
  }
  if (!data.date) {
    errors.date = 'Event date is required.';
  }
  if (!data.venue || data.venue.trim().length < 2) {
    errors.venue = 'Venue or online link info is required.';
  }
  if (!data.deadline) {
    errors.deadline = 'Registration deadline is required.';
  }
  if (!data.registrationUrl || !data.registrationUrl.startsWith('http')) {
    errors.registrationUrl = 'A valid registration URL (starting with http:// or https://) is required.';
  }
  if (!data.description || data.description.trim().length < 15) {
    errors.description = 'Description must be at least 15 characters long.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}


