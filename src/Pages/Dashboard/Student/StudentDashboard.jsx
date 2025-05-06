import { FaBook, FaChartLine, FaCalendarAlt, FaBell, FaFileAlt, FaGraduationCap } from 'react-icons/fa';

const StudentDashboard = () => {
  // Sample data
  const courses = [
    { id: 1, name: "Mathematics", teacher: "Mr. Johnson", grade: "A-", progress: 85 },
    { id: 2, name: "Science", teacher: "Ms. Williams", grade: "B+", progress: 72 },
    { id: 3, name: "English", teacher: "Mr. Brown", grade: "A", progress: 90 }
  ];

  const assignments = [
    { id: 1, course: "Mathematics", title: "Algebra Homework", due: "Tomorrow", status: "pending" },
    { id: 2, course: "Science", title: "Lab Report", due: "In 3 days", status: "pending" },
    { id: 3, course: "English", title: "Essay Draft", due: "Nov 15", status: "completed" }
  ];

  const announcements = [
    { id: 1, title: "Exam Schedule Update", course: "Mathematics", date: "2 hours ago" },
    { id: 2, title: "Field Trip Permission Slips", course: "Science", date: "1 day ago" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
          <p className="text-gray-600">Welcome back, Sarah!</p>
        </div>
        <button className="p-2 rounded-full bg-white shadow">
          <FaBell className="text-gray-600" />
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <FaGraduationCap size={20} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Overall GPA</h3>
            <p className="font-bold text-lg">3.7</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <FaBook size={20} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Active Courses</h3>
            <p className="font-bold text-lg">{courses.length}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <FaFileAlt size={20} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Pending Assignments</h3>
            <p className="font-bold text-lg">
              {assignments.filter(a => a.status === "pending").length}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Courses */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaBook className="text-blue-500" /> My Courses
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map(course => (
                <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition">
                  <h3 className="font-bold">{course.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{course.teacher}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                      course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.grade}
                    </span>
                    
                    <div className="w-1/2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="bg-white rounded-lg shadow border p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaCalendarAlt className="text-purple-500" /> Upcoming Assignments
          </h2>
          
          <div className="space-y-3">
            {assignments.map(assignment => (
              <div key={assignment.id} className="border-b pb-3 last:border-b-0">
                <h3 className="font-medium">{assignment.title}</h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{assignment.course}</span>
                  <span className={`${
                    assignment.status === "pending" ? "text-yellow-600" : "text-green-600"
                  }`}>
                    {assignment.due} • {assignment.status === "pending" ? "Pending" : "Completed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Announcements */}
      <div className="bg-white rounded-lg shadow border p-6 mt-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FaBell className="text-red-500" /> Recent Announcements
        </h2>
        
        <div className="space-y-3">
          {announcements.map(announcement => (
            <div key={announcement.id} className="border-b pb-3 last:border-b-0">
              <h3 className="font-medium">{announcement.title}</h3>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{announcement.course}</span>
                <span>{announcement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;