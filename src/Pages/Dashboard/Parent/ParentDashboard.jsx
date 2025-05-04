import { FaUserGraduate, FaClipboardList, FaSchool, FaBell } from 'react-icons/fa';

const ParentDashboard = () => {
  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">2</h1>
            <h4 className="text-lg font-semibold">Children</h4>
          </div>
          <FaUserGraduate className="text-5xl text-blue-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">5</h1>
            <h4 className="text-lg font-semibold">New Grades</h4>
          </div>
          <FaClipboardList className="text-5xl text-green-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">2</h1>
            <h4 className="text-lg font-semibold">Upcoming Events</h4>
          </div>
          <FaSchool className="text-5xl text-purple-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">3</h1>
            <h4 className="text-lg font-semibold">Notifications</h4>
          </div>
          <FaBell className="text-5xl text-yellow-600" />
        </div>
      </div>

      {/* Children Overview */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-4">My Children</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Sarah Johnson</h3>
            <p className="text-gray-600 mb-2">Grade 8 - Class B</p>
            <div className="flex justify-between">
              <span>Math: A-</span>
              <span>Science: B+</span>
              <span>Attendance: 92%</span>
            </div>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Michael Johnson</h3>
            <p className="text-gray-600 mb-2">Grade 10 - Class A</p>
            <div className="flex justify-between">
              <span>Math: B+</span>
              <span>Science: A</span>
              <span>Attendance: 95%</span>
            </div>
          </div>
        </div>
      </div>

      {/* School Announcements */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">School Announcements</h2>
        <div className="space-y-3">
          <div className="border-b pb-3">
            <h3 className="font-semibold">Parent-Teacher Meeting</h3>
            <p className="text-gray-600">Next Friday, 3:00 PM - 5:00 PM</p>
          </div>
          <div className="border-b pb-3">
            <h3 className="font-semibold">School Sports Day</h3>
            <p className="text-gray-600">March 15th, 9:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;