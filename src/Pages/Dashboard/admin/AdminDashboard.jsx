import { FaUsers, FaChalkboardTeacher, FaUserFriends, FaMoneyBillWave } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">9,825</h1>
            <h4 className="text-lg font-semibold">Students</h4>
            <p className="text-gray-600 text-sm">+5% from last month</p>
          </div>
          <FaUsers className="text-5xl text-blue-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">682</h1>
            <h4 className="text-lg font-semibold">Teachers</h4>
            <p className="text-gray-600 text-sm">+3 new hires</p>
          </div>
          <FaChalkboardTeacher className="text-5xl text-green-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">4,398</h1>
            <h4 className="text-lg font-semibold">Parents</h4>
            <p className="text-gray-600 text-sm">98% active</p>
          </div>
          <FaUserFriends className="text-5xl text-purple-600" />
        </div>

        <div className="rounded-2xl border p-6 shadow-lg bg-white flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">$195,482</h1>
            <h4 className="text-lg font-semibold">Revenue</h4>
            <p className="text-gray-600 text-sm">This semester</p>
          </div>
          <FaMoneyBillWave className="text-5xl text-yellow-600" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition">
            Add New Student
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition">
            Create Class
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition">
            Generate Report
          </button>
          <button className="p-4 border rounded-lg hover:bg-gray-50 transition">
            Send Announcement
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center p-3 border-b">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <FaUsers className="text-blue-600" />
            </div>
            <p>5 new students enrolled today</p>
          </div>
          <div className="flex items-center p-3 border-b">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <FaChalkboardTeacher className="text-green-600" />
            </div>
            <p>Mr. Smith assigned to Grade 10 Math</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
