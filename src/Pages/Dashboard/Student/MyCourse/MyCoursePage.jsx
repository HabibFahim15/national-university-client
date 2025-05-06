import { FaBook, FaChartLine, FaCalendarAlt, FaFileAlt, FaVideo, FaComments } from 'react-icons/fa';

const MyCoursePage = () => {
  // Sample course data
  const course = {
    name: "Mathematics Grade 10",
    teacher: "Mr. David Wilson",
    description: "Algebra, Geometry, and introductory Trigonometry",
    progress: 65,
    upcomingAssignment: {
      title: "Chapter 5 Homework",
      dueDate: "Due Tomorrow"
    },
    recentAnnouncement: {
      title: "Exam Schedule Update",
      content: "Midterm exam moved to November 15th"
    }
  };

  // Sample modules
  const modules = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      resources: 4,
      completed: true
    },
    {
      id: 2,
      title: "Linear Equations",
      resources: 5,
      completed: true
    },
    {
      id: 3,
      title: "Quadratic Functions",
      resources: 6,
      completed: false
    },
    {
      id: 4,
      title: "Geometry Basics",
      resources: 3,
      completed: false
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Course Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{course.name}</h1>
            <p className="text-gray-600">{course.teacher}</p>
          </div>
          <div className="w-full md:w-64">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Progress: {course.progress}%</span>
              <span className="text-sm text-gray-500">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        <p className="text-gray-700">{course.description}</p>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <FaFileAlt size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Upcoming Assignment</h3>
            <p className="text-gray-600">{course.upcomingAssignment.title}</p>
            <p className="text-sm text-red-500">{course.upcomingAssignment.dueDate}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <FaComments size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Recent Announcement</h3>
            <p className="text-gray-600">{course.recentAnnouncement.title}</p>
            <p className="text-sm text-gray-500">{course.recentAnnouncement.content}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <FaChartLine size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Your Performance</h3>
            <p className="text-gray-600">Current Grade: <span className="font-bold">B+</span></p>
            <p className="text-sm text-gray-500">Above class average</p>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Modules Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaBook className="text-blue-500" /> Course Modules
            </h2>
            
            <div className="space-y-3">
              {modules.map(module => (
                <div 
                  key={module.id} 
                  className={`border rounded-lg p-4 hover:shadow-md transition ${module.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{module.title}</h3>
                    {module.completed ? (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Completed</span>
                    ) : (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{module.resources} Resources</span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                      {module.completed ? 'Review' : 'Start'}
                    </button>
                    <button className="text-sm border px-3 py-1 rounded hover:bg-gray-50">
                      Resources
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Work */}
          <div className="bg-white rounded-lg shadow border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaCalendarAlt className="text-purple-500" /> Upcoming
            </h2>
            <div className="space-y-3">
              <div className="border-b pb-3">
                <h3 className="font-medium">Chapter 5 Quiz</h3>
                <p className="text-sm text-gray-600">Due: Nov 10</p>
              </div>
              <div className="border-b pb-3">
                <h3 className="font-medium">Midterm Exam</h3>
                <p className="text-sm text-gray-600">Nov 15</p>
              </div>
              <div>
                <h3 className="font-medium">Geometry Project</h3>
                <p className="text-sm text-gray-600">Due: Nov 20</p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-lg shadow border p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaVideo className="text-red-500" /> Quick Resources
            </h2>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                <FaFileAlt /> Course Syllabus
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                <FaVideo /> Quadratic Equations Video
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-600 hover:underline">
                <FaFileAlt /> Formula Sheet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCoursePage;