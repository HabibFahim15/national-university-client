import { FaChartLine, FaBook, FaUserGraduate, FaSchool, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const ProgressReportPage = () => {
  // Sample data for multiple children
  const children = [
    {
      id: 1,
      name: "Sarah Johnson",
      grade: "Grade 10",
      school: "City High School",
      academicYear: "2023-2024",
      advisor: "Mr. Thompson",
      avatarColor: "bg-blue-100 text-blue-600",
      subjects: [
        {
          name: "Mathematics",
          teacher: "Mr. Johnson",
          term1: "A-",
          term2: "B+",
          term3: "A",
          final: "A-",
          comments: "Showing excellent problem-solving skills"
        },
        // More subjects...
      ],
      attendance: {
        present: 92,
        absent: 3,
        late: 2,
        rate: "96%"
      },
      skills: [
        { skill: "Critical Thinking", level: "Excellent", progress: 90 },
        // More skills...
      ],
      advisorComment: "Sarah has shown remarkable improvement in mathematics..."
    },
    {
      id: 2,
      name: "Michael Johnson",
      grade: "Grade 8",
      school: "City Middle School",
      academicYear: "2023-2024",
      advisor: "Ms. Rodriguez",
      avatarColor: "bg-green-100 text-green-600",
      subjects: [
        {
          name: "Pre-Algebra",
          teacher: "Mr. Davis",
          term1: "B",
          term2: "B+",
          term3: "A-",
          final: "B+",
          comments: "Making good progress in algebraic concepts"
        },
        // More subjects...
      ],
      attendance: {
        present: 88,
        absent: 5,
        late: 1,
        rate: "93%"
      },
      skills: [
        { skill: "Collaboration", level: "Excellent", progress: 85 },
        // More skills...
      ],
      advisorComment: "Michael works well in groups and shows leadership..."
    }
  ];

  const [currentChildIndex, setCurrentChildIndex] = useState(0);
  const currentChild = children[currentChildIndex];

  const switchChild = (direction) => {
    setCurrentChildIndex(prev => {
      if (direction === 'prev') {
        return prev === 0 ? children.length - 1 : prev - 1;
      } else {
        return prev === children.length - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header with Child Selector */}
      <div className="mb-6 text-center relative">
        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={() => switchChild('prev')}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <FaChevronLeft />
          </button>
          
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-full ${currentChild.avatarColor} flex items-center justify-center text-2xl`}>
              <FaUserGraduate />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{currentChild.name}</h1>
              <p className="text-gray-600">{currentChild.academicYear} • {currentChild.school}</p>
            </div>
          </div>
          
          <button 
            onClick={() => switchChild('next')}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>
        
        {/* Child Indicator Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {children.map((child, index) => (
            <button
              key={child.id}
              onClick={() => setCurrentChildIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentChildIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`View ${child.name}'s progress`}
            />
          ))}
        </div>
      </div>

      {/* Student Info Card */}
      <div className="bg-white rounded-lg shadow border p-6 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-gray-500 text-sm">Grade Level</p>
            <p className="font-medium">{currentChild.grade}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">School</p>
            <p className="font-medium">{currentChild.school}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Advisor</p>
            <p className="font-medium">{currentChild.advisor}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Overall Performance</p>
            <p className="font-medium">
              <GradeBadge grade={
                currentChild.subjects.reduce((acc, subject) => {
                  const gradeValue = subject.final?.charAt(0);
                  return gradeValue ? [...acc, gradeValue] : acc;
                }, []).sort()[0] + "+" // Simple way to get dominant grade
              } />
            </p>
          </div>
        </div>
      </div>

      {/* Academic Performance */}
      <div className="bg-white rounded-lg shadow border p-6 mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FaChartLine className="text-blue-500" /> Academic Performance
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Teacher</th>
                <th className="py-3 px-4">Term 1</th>
                <th className="py-3 px-4">Term 2</th>
                <th className="py-3 px-4">Term 3</th>
                <th className="py-3 px-4">Final Grade</th>
                <th className="py-3 px-4">Comments</th>
              </tr>
            </thead>
            <tbody>
              {currentChild.subjects.map((subject, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{subject.name}</td>
                  <td className="py-3 px-4">{subject.teacher}</td>
                  <td className="py-3 px-4">
                    <GradeBadge grade={subject.term1} />
                  </td>
                  <td className="py-3 px-4">
                    <GradeBadge grade={subject.term2} />
                  </td>
                  <td className="py-3 px-4">
                    <GradeBadge grade={subject.term3} />
                  </td>
                  <td className="py-3 px-4 font-bold">
                    <GradeBadge grade={subject.final} />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{subject.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Attendance */}
        <div className="bg-white rounded-lg shadow border p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaCalendarAlt className="text-green-500" /> Attendance
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            <div>
              <p className="text-2xl font-bold text-green-600">{currentChild.attendance.present}</p>
              <p className="text-gray-500 text-sm">Days Present</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-600">{currentChild.attendance.absent}</p>
              <p className="text-gray-500 text-sm">Days Absent</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-600">{currentChild.attendance.late}</p>
              <p className="text-gray-500 text-sm">Times Late</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Attendance Rate: <span className="font-bold">{currentChild.attendance.rate}</span></p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-600 h-2.5 rounded-full" 
                style={{ width: currentChild.attendance.rate }}
              ></div>
            </div>
          </div>
        </div>

        {/* Skills Assessment */}
        <div className="bg-white rounded-lg shadow border p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaChartLine className="text-purple-500" /> Skills Development
          </h2>
          <div className="space-y-4">
            {currentChild.skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.skill}</span>
                  <span className="text-sm text-gray-500">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-purple-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comments */}
      <div className="bg-white rounded-lg shadow border p-6">
        <h2 className="text-xl font-bold mb-4">Advisor's Comments</h2>
        <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
          <p className="text-gray-800">"{currentChild.advisorComment}"</p>
          <p className="text-right mt-2 text-gray-600">- {currentChild.advisor}, Advisor</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Report generated on {new Date().toLocaleDateString()}</p>
        <p className="mt-1">© {new Date().getFullYear()} {currentChild.school}</p>
      </div>
    </div>
  );
};

// Reusable grade badge component
const GradeBadge = ({ grade }) => {
  return (
    <span className={`inline-block w-8 h-8 rounded-full flex items-center justify-center ${
      grade?.startsWith('A') ? 'bg-green-100 text-green-800' :
      grade?.startsWith('B') ? 'bg-blue-100 text-blue-800' :
      grade?.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
      'bg-gray-100 text-gray-800'
    }`}>
      {grade || '-'}
    </span>
  );
};

export default ProgressReportPage;