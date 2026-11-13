import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  filterEvents, 
  sortEvents, 
  toggleBookmark, 
  validateEventData, 
  getDefaultUsers,
  authenticateUser,
  getUserPermissions,
  registerStudentForEvent,
  cancelRegistration,
  EventItem 
} from '../src/logic/eventLogic';

const mockEvents: EventItem[] = [
  {
    id: 'evt-1',
    title: 'National Hackathon 2026',
    college: 'IIT Delhi',
    category: 'Hackathon',
    mode: 'In-Person',
    date: '2026-11-20',
    time: '09:00 AM',
    venue: 'Auditorium, Hauz Khas',
    deadline: '2026-11-15',
    eligibility: 'All UG/PG students',
    fee: 'Free',
    prizes: '₹1,00,000',
    image: '',
    registrationUrl: 'https://example.com/hack',
    description: 'A 36-hour flagship hackathon bringing tech innovators together.',
    featured: true
  },
  {
    id: 'evt-2',
    title: 'AI & Machine Learning Workshop',
    college: 'IISc Bangalore',
    category: 'Workshop',
    mode: 'Online',
    date: '2026-11-25',
    time: '10:00 AM',
    venue: 'Google Meet',
    deadline: '2026-11-22',
    eligibility: 'Open to all',
    fee: 'Free',
    image: '',
    registrationUrl: 'https://example.com/ai-ws',
    description: 'Hands-on session with PyTorch and Transformer architectures.',
    featured: false
  },
  {
    id: 'evt-3',
    title: 'Inter-College Coding Competition',
    college: 'BITS Pilani',
    category: 'Competition',
    mode: 'Hybrid',
    date: '2026-11-18',
    time: '02:00 PM',
    venue: 'Online / Campus',
    deadline: '2026-11-16',
    eligibility: 'Engineering undergraduates',
    fee: '₹100',
    image: '',
    registrationUrl: 'https://example.com/coding',
    description: 'Solve competitive algorithmic problems in speed coding challenges.',
    featured: true
  }
];

test('filterEvents filters by search query on title and college', () => {
  const result = filterEvents(mockEvents, { query: 'delhi' });
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'evt-1');

  const result2 = filterEvents(mockEvents, { query: 'machine learning' });
  assert.equal(result2.length, 1);
  assert.equal(result2[0].id, 'evt-2');
});

test('filterEvents filters by category and mode', () => {
  const byCat = filterEvents(mockEvents, { category: 'Workshop' });
  assert.equal(byCat.length, 1);
  assert.equal(byCat[0].id, 'evt-2');

  const byMode = filterEvents(mockEvents, { mode: 'Online' });
  assert.equal(byMode.length, 1);
  assert.equal(byMode[0].id, 'evt-2');
});

test('sortEvents correctly orders by date and deadline', () => {
  const sortedAsc = sortEvents(mockEvents, 'date-asc');
  assert.equal(sortedAsc[0].id, 'evt-3'); // Nov 18
  assert.equal(sortedAsc[2].id, 'evt-2'); // Nov 25

  const sortedDeadline = sortEvents(mockEvents, 'deadline');
  assert.equal(sortedDeadline[0].id, 'evt-1'); // Nov 15 deadline
});

test('toggleBookmark toggles state on and off', () => {
  const step1 = toggleBookmark([], 'evt-1');
  assert.equal(step1.isSaved, true);
  assert.deepEqual(step1.bookmarks, ['evt-1']);

  const step2 = toggleBookmark(step1.bookmarks, 'evt-1');
  assert.equal(step2.isSaved, false);
  assert.deepEqual(step2.bookmarks, []);
});

test('validateEventData enforces required fields and valid URL', () => {
  const invalid = validateEventData({ title: '' });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.title);
  assert.ok(invalid.errors.registrationUrl);

  const valid = validateEventData({
    title: 'Valid Tech Summit',
    college: 'IIT Roorkee',
    category: 'Seminar',
    date: '2026-12-01',
    venue: 'Main Hall',
    deadline: '2026-11-28',
    registrationUrl: 'https://iitr.ac.in/summit',
    description: 'An expansive university symposium on future computer systems and quantum tech.'
  });
  assert.equal(valid.isValid, true);
});

test('authenticateUser verifies credentials for student, organizer, and admin', () => {
  const users = getDefaultUsers();
  
  // Student
  const student = authenticateUser(users, 'student@spsu.ac.in', 'student123');
  assert.ok(student);
  assert.equal(student.role, 'student');
  assert.equal(student.name, 'Anirudhh');

  // Organizer
  const organizer = authenticateUser(users, 'organizer@spsu.ac.in', 'organizer123');
  assert.ok(organizer);
  assert.equal(organizer.role, 'organizer');
  assert.equal(organizer.name, 'Piyush');

  // Admin
  const admin = authenticateUser(users, 'ADMIN@SPSU.AC.IN', 'admin123'); // case-insensitive email
  assert.ok(admin);
  assert.equal(admin.role, 'admin');
  assert.equal(admin.name, 'DS Chouhan');

  // Login by University Enrollment ID
  const studentById = authenticateUser(users, 'SPSU/2023/CSE/042', 'student123');
  assert.ok(studentById);
  assert.equal(studentById?.id, 'usr-student-01');

  const orgById = authenticateUser(users, 'spsu/fac/sac/019', 'organizer123');
  assert.ok(orgById);
  assert.equal(orgById?.id, 'usr-organizer-01');

  // Invalid password
  const failed = authenticateUser(users, 'admin@spsu.ac.in', 'wrongpassword');
  assert.equal(failed, null);
});

test('getUserPermissions correctly scopes capabilities for each role', () => {
  const studentPerms = getUserPermissions('student');
  assert.equal(studentPerms.canRegister, true);
  assert.equal(studentPerms.canCreateEvent, false);
  assert.equal(studentPerms.canEditEvent, false);
  assert.equal(studentPerms.canApproveEvents, false);

  const orgPerms = getUserPermissions('organizer');
  assert.equal(orgPerms.canRegister, true);
  assert.equal(orgPerms.canCreateEvent, true);
  assert.equal(orgPerms.canEditEvent, true);
  assert.equal(orgPerms.canViewRegistrations, true);
  assert.equal(orgPerms.canApproveEvents, false);

  const adminPerms = getUserPermissions('admin');
  assert.equal(adminPerms.canRegister, true);
  assert.equal(adminPerms.canCreateEvent, true);
  assert.equal(adminPerms.canEditEvent, true);
  assert.equal(adminPerms.canDeleteEvent, true);
  assert.equal(adminPerms.canApproveEvents, true);
  assert.equal(adminPerms.canManageSystem, true);
});

test('registerStudentForEvent creates passes and prevents duplicate registrations', () => {
  const regResult = registerStudentForEvent([], {
    eventId: 'evt-hackspsu-2026',
    eventTitle: 'HackSPSU 2026',
    studentEmail: 'student@spsu.ac.in',
    studentName: 'Anirudhh',
    enrollmentId: 'SPSU/2023/CSE/042',
    phone: '+91 98290 12345',
    branch: 'B.Tech CSE'
  });

  assert.equal(regResult.success, true);
  assert.ok(regResult.registration);
  assert.ok(regResult.registration.ticketNumber.startsWith('SPSU-TKT-2026-'));
  assert.equal(regResult.registration.status, 'Confirmed');

  // Attempt duplicate registration
  const duplicate = registerStudentForEvent([regResult.registration], {
    eventId: 'evt-hackspsu-2026',
    eventTitle: 'HackSPSU 2026',
    studentEmail: 'student@spsu.ac.in',
    studentName: 'Anirudhh',
    enrollmentId: 'SPSU/2023/CSE/042',
    phone: '+91 98290 12345',
    branch: 'B.Tech CSE'
  });
  assert.equal(duplicate.success, false);
  assert.ok(duplicate.error && duplicate.error.includes('already registered'));

  // Cancel registration
  const cancelledList = cancelRegistration([regResult.registration], regResult.registration.id);
  assert.equal(cancelledList[0].status, 'Cancelled');
});

