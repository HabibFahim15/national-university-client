import { FaUserGraduate, FaSchool, FaChartLine, FaBell, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

const ParentChildrenPage = () => {
  // Sample data
  const children = [
    {
      id: 1,
      name: "Sarah Johnson",
      grade: "Grade 10",
      school: "City High School",
      attendance: "95%",
      overallGrade: "A-",
      teacher: "Mr. Thompson",
      contact: "thompson@school.edu",
      courses: [
        { name: "Mathematics", grade: "A-", teacher: "Mr. Johnson" },
        { name: "Science", grade: "B+", teacher: "Ms. Williams" },
        { name: "English", grade: "A", teacher: "Mr. Brown" }
      ]
    },
    {
      id: 2,
      name: "Michael Johnson",
      grade: "Grade 8",
      school: "City Middle School",
      attendance: "92%",
      overallGrade: "B+",
      teacher: "Ms. Rodriguez",
      contact: "rodriguez@school.edu",
      courses: [
        { name: "Pre-Algebra", grade: "B", teacher: "Mr. Davis" },
        { name: "Life Science", grade: "A-", teacher: "Ms. Chen" },
        { name: "Literature", grade: "B+", teacher: "Mrs. Wilson" }
      ]
    }
  ];

  const upcomingEvents = [
    { id: 1, child: "Sarah", title: "Parent-Teacher Conference", date: "Nov 15", time: "3:00 PM" },
    { id: 2, child: "Michael", title: "Science Fair", date: "Nov 20", time: "10:00 AM" },
    { id: 3, child: "Both", title: "School Holiday", date: "Nov 23", time: "All Day" }
  ];

  const recentAnnouncements = [
    { id: 1, child: "Sarah", title: "Math Exam Scheduled", date: "2 days ago", content: "Chapter 5 test on Friday" },
    { id: 2, child: "Michael", title: "Field Trip Permission", date: "1 week ago", content: "Permission slip due Nov 10" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Children</h1>
        <p className="text-gray-600">Overview of your children's academic progress</p>
      </div>

      {/* Children Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {children.map(child => (
          <div key={child.id} className="bg-white rounded-lg shadow border overflow-hidden">
            {/* Child Header */}
            <div className="bg-blue-600 p-4 text-white flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
                <FaUserGraduate className="text-xl" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{child.name}</h2>
                <p className="text-blue-100">{child.grade} • {child.school}</p>
              </div>
            </div>

            {/* Child Info */}
            <div className="p-4 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <FaSchool className="text-gray-500" /> Class Teacher
                </h3>
                <p>{child.teacher}</p>
                <a href={`mailto:${child.contact}`} className="text-blue-600 text-sm flex items-center gap-1 mt-1">
                  <FaEnvelope /> {child.contact}
                </a>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <FaChartLine className="text-gray-500" /> Overall Grade
                </h3>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  child.overallGrade.startsWith('A') ? 'bg-green-100 text-green-800' :
                  child.overallGrade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {child.overallGrade}
                </span>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <FaChartLine className="text-gray-500" /> Attendance
                </h3>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{child.attendance}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: child.attendance }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses */}
            <div className="p-4 border-t">
              <h3 className="font-bold mb-3">Current Courses</h3>
              <div className="space-y-2">
                {child.courses.map((course, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{course.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                      course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow border p-6 mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FaCalendarAlt className="text-purple-500" /> Upcoming Events
        </h2>
        
        <div className="space-y-3">
          {upcomingEvents.map(event => (
            <div key={event.id} className="border-b pb-3 last:border-b-0">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.child}'s school</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{event.date}</p>
                  <p className="text-sm text-gray-600">{event.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Announcements */}
      <div className="bg-white rounded-lg shadow border p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FaBell className="text-red-500" /> Recent Announcements
        </h2>
        
        <div className="space-y-3">
          {recentAnnouncements.map(announcement => (
            <div key={announcement.id} className="border-b pb-3 last:border-b-0">
              <div className="flex justify-between mb-1">
                <h3 className="font-medium">{announcement.title}</h3>
                <span className="text-sm text-gray-500">{announcement.date}</span>
              </div>
              <p className="text-gray-600 text-sm">{announcement.content}</p>
              <p className="text-sm text-gray-400 mt-1">For {announcement.child}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentChildrenPage;