import { useState } from 'react';
import { FaSearch, FaFilter, FaChartLine, FaFileAlt, FaAward } from 'react-icons/fa';

const GradesPage = () => {
  // Sample data
  const courses = [
    {
      id: 1,
      name: "Mathematics",
      teacher: "Mr. Johnson",
      assignments: [
        { name: "Algebra Test", grade: "A-", max: 100, score: 92 },
        { name: "Homework 1", grade: "B+", max: 20, score: 18 },
        { name: "Geometry Quiz", grade: "A", max: 50, score: 48 }
      ],
      overallGrade: "A-"
    },
    {
      id: 2,
      name: "Science",
      teacher: "Ms. Williams",
      assignments: [
        { name: "Physics Test", grade: "B", max: 100, score: 84 },
        { name: "Lab Report", grade: "A-", max: 30, score: 28 },
        { name: "Chemistry Quiz", grade: "B+", max: 50, score: 42 }
      ],
      overallGrade: "B+"
    },
    {
      id: 3,
      name: "English Literature",
      teacher: "Mr. Brown",
      assignments: [
        { name: "Essay 1", grade: "A", max: 100, score: 95 },
        { name: "Reading Quiz", grade: "A-", max: 20, score: 19 }
      ],
      overallGrade: "A"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Filter courses
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate GPA (simple version)
  const gradeValues = { 'A+': 4.3, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'D': 1.0, 'F': 0 };
  const gpa = (courses.reduce((sum, course) => sum + (gradeValues[course.overallGrade] || 0), 0) / courses.length).toFixed(2);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Grades</h1>
        <p className="text-gray-600">View your academic performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <FaChartLine size={20} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Overall GPA</h3>
            <p className="font-bold text-lg">{gpa}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <FaAward size={20} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Best Subject</h3>
            <p className="font-bold text-lg">English (A)</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <FaFileAlt size={20} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Total Assignments</h3>
            <p className="font-bold text-lg">
              {courses.reduce((sum, course) => sum + course.assignments.length, 0)}
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-4 py-2 bg-white"
        >
          <option value="all">All Courses</option>
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
          <option value="english">English</option>
        </select>
      </div>

      {/* Courses Grades */}
      <div className="space-y-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow border overflow-hidden">
            {/* Course Header */}
            <div className="bg-gray-100 px-6 py-3 flex justify-between items-center">
              <div>
                <h2 className="font-bold text-lg">{course.name}</h2>
                <p className="text-gray-600 text-sm">{course.teacher}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                course.overallGrade.startsWith('A') ? 'bg-green-100 text-green-800' :
                course.overallGrade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                course.overallGrade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                Overall: {course.overallGrade}
              </span>
            </div>

            {/* Assignments Table */}
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-2">Assignment</th>
                    <th className="pb-2">Score</th>
                    <th className="pb-2">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {course.assignments.map((assignment, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-3">{assignment.name}</td>
                      <td className="py-3">{assignment.score}/{assignment.max}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          assignment.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                          assignment.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                          assignment.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {assignment.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed rounded-lg mt-6">
          <p className="text-gray-500">No courses found</p>
          <button 
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => {
              setFilter("all");
              setSearchTerm("");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default GradesPage;