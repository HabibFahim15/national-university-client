import { FaChalkboardTeacher, FaUsers, FaCalendarAlt, FaChartLine, FaBook, FaClipboardList, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Sample data from admin
const myClasses = [
  {
    id: 'math10',
    name: 'Mathematics Grade 10',
    students: 28,
    schedule: 'Mon/Wed/Fri 9:00-10:30',
    room: 'Room 204',
    assignmentsDue: 3,
    attendanceRate: '94%',
    avgGrade: 'B+'
  },
  {
    id: 'physics11',
    name: 'Physics Grade 11',
    students: 24,
    schedule: 'Tue/Thu 11:00-12:30',
    room: 'Lab 3',
    assignmentsDue: 1,
    attendanceRate: '89%',
    avgGrade: 'A-'
  },
  {
    id: 'science9',
    name: 'Science Grade 9',
    students: 30,
    schedule: 'Mon/Wed 1:00-2:30',
    room: 'Room 105',
    assignmentsDue: 0,
    attendanceRate: '97%',
    avgGrade: 'B'
  }
];

const upcomingEvents = [
  { id: 1, title: 'Staff Meeting', date: 'Tomorrow 3:00 PM', type: 'meeting' },
  { id: 2, title: 'Parent-Teacher Conferences', date: 'Nov 15-17', type: 'event' },
  { id: 3, title: 'Science Fair', date: 'Dec 5', type: 'event' }
];

const MyClasses = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">My Classes</h1>
          <p className="text-gray-600">Overview of all your assigned classes</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-white shadow">
            <FaBell className="text-gray-600" />
          </button>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
            JD
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard 
          icon={<FaChalkboardTeacher className="text-blue-600" />}
          title="Total Classes"
          value={myClasses.length}
          trend="+2 this semester"
        />
        <StatCard 
          icon={<FaUsers className="text-green-600" />}
          title="Total Students"
          value={myClasses.reduce((sum, cls) => sum + cls.students, 0)}
          trend="5 new students"
        />
        <StatCard 
          icon={<FaClipboardList className="text-yellow-600" />}
          title="Assignments Due"
          value={myClasses.reduce((sum, cls) => sum + cls.assignmentsDue, 0)}
          trend="3 to grade"
        />
        <StatCard 
          icon={<FaChartLine className="text-purple-600" />}
          title="Avg. Attendance"
          value="93%"
          trend="+2% from last month"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Class Cards */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Classes</h2>
              <Link to="/teacher/classes" className="text-blue-600 hover:underline">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myClasses.map(cls => (
                <ClassCard key={cls.id} cls={cls} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
            <div className="space-y-3">
              {upcomingEvents.map(event => (
                <div key={event.id} className="border-b pb-3 last:border-b-0">
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 bg-blue-50 text-blue-600 rounded-lg flex flex-col items-center">
                <FaBook className="text-xl mb-2" />
                <span className="text-sm">Create Assignment</span>
              </button>
              <button className="p-3 bg-green-50 text-green-600 rounded-lg flex flex-col items-center">
                <FaUsers className="text-xl mb-2" />
                <span className="text-sm">Take Attendance</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const StatCard = ({ icon, title, value, trend }) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
    <div className="p-3 rounded-full bg-opacity-20">
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-gray-400">{trend}</p>
    </div>
  </div>
);

const ClassCard = ({ cls }) => (
  <Link 
    to={`/teacher/classes/${cls.id}`}
    className="border rounded-lg p-4 hover:shadow-md transition"
  >
    <h3 className="text-lg font-bold mb-2">{cls.name}</h3>
    <div className="space-y-2 text-gray-600 mb-3">
      <div className="flex items-center gap-2">
        <FaUsers className="text-gray-400" />
        <span>{cls.students} Students</span>
      </div>
      <div className="flex items-center gap-2">
        <FaCalendarAlt className="text-gray-400" />
        <span>{cls.schedule}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaChalkboardTeacher className="text-gray-400" />
        <span>{cls.room}</span>
      </div>
    </div>
    <div className="flex justify-between text-sm mt-4">
      <span className={`px-2 py-1 rounded-full ${
        cls.assignmentsDue > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
      }`}>
        {cls.assignmentsDue} assignments due
      </span>
      <span>Avg: {cls.avgGrade}</span>
    </div>
  </Link>
);

export default MyClasses;