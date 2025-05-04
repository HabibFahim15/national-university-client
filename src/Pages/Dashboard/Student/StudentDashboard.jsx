import { FaBook, FaCalendarAlt, FaClipboardList, FaGraduationCap } from 'react-icons/fa';

const StudentDashboard = () => {
  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">6</h1>
            <h4 className="text-lg font-semibold">Subjects</h4>
          </div>
          <FaBook className="text-5xl text-blue-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">3</h1>
            <h4 className="text-lg font-semibold">Assignments</h4>
          </div>
          <FaClipboardList className="text-5xl text-red-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">A-</h1>
            <h4 className="text-lg font-semibold">Average Grade</h4>
          </div>
          <FaGraduationCap className="text-5xl text-green-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">95%</h1>
            <h4 className="text-lg font-semibold">Attendance</h4>
          </div>
          <FaCalendarAlt className="text-5xl text-purple-600" />
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Today's Schedule</h2>
        <div className="space-y-3">
          <div className="flex items-center p-3 border-b">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FaBook className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">Mathematics</h3>
              <p className="text-gray-600">08:30 AM - Room 204</p>
            </div>
          </div>
          <div className="flex items-center p-3 border-b">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <FaBook className="text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold">Science</h3>
              <p className="text-gray-600">10:15 AM - Lab 3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Assignments */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Upcoming Assignments</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 border-b">
            <div>
              <h3 className="font-semibold">Math Homework</h3>
              <p className="text-gray-600">Due Tomorrow</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Submit
            </button>
          </div>
          <div className="flex justify-between items-center p-3 border-b">
            <div>
              <h3 className="font-semibold">Science Project</h3>
              <p className="text-gray-600">Due in 3 days</p>
            </div>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;