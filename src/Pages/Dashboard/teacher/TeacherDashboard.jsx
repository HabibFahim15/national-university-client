import { FaBook, FaUsers, FaChartLine, FaBell } from 'react-icons/fa';

const TeacherDashboard = () => {
  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">5</h1>
            <h4 className="text-lg font-semibold">Classes</h4>
          </div>
          <FaBook className="text-5xl text-blue-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">142</h1>
            <h4 className="text-lg font-semibold">Students</h4>
          </div>
          <FaUsers className="text-5xl text-green-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">12</h1>
            <h4 className="text-lg font-semibold">Assignments</h4>
          </div>
          <FaBook className="text-5xl text-purple-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">87%</h1>
            <h4 className="text-lg font-semibold">Attendance</h4>
          </div>
          <FaChartLine className="text-5xl text-yellow-600" />
        </div>
      </div>

      {/* Upcoming Classes */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Today's Classes</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 border-b">
            <div>
              <h3 className="font-semibold">Grade 10 Mathematics</h3>
              <p className="text-gray-600">09:00 AM - 10:30 AM</p>
            </div>
            <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">
              Start
            </button>
          </div>
          <div className="flex justify-between items-center p-3 border-b">
            <div>
              <h3 className="font-semibold">Grade 11 Physics</h3>
              <p className="text-gray-600">11:00 AM - 12:30 PM</p>
            </div>
            <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
              Prepare
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Notifications</h2>
          <FaBell className="text-gray-500" />
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p>Staff meeting tomorrow at 3:00 PM</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg">
            <p>3 assignments pending review</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;