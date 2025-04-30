import { 
    AcademicCapIcon,
    UserGroupIcon,
    EnvelopeIcon,
    PhoneIcon,
    CalendarIcon,
    ChartBarIcon
  } from "@heroicons/react/24/outline";
  
  const Report = () => {
    // Sample data
    const teachers = [
      { id: 1, name: "Sarah Johnson", email: "sarah@school.com", subjects: "Math, Physics", students: 45 },
      { id: 2, name: "Robert Chen", email: "robert@school.com", subjects: "English", students: 32 },
      { id: 3, name: "Maria Garcia", email: "maria@school.com", subjects: "Biology", students: 28 }
    ];
  
    const students = [
      { id: 101, name: "Emma Wilson", grade: "10-A", teacher: "Sarah Johnson", attendance: "95%" },
      { id: 102, name: "Noah Smith", grade: "9-B", teacher: "Robert Chen", attendance: "92%" },
      { id: 103, name: "Olivia Brown", grade: "11-C", teacher: "Maria Garcia", attendance: "98%" }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              School Report
            </h1>
            <p className="text-gray-600">
              Overview of teachers and students
            </p>
          </div>
  
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 mr-4">
                  <AcademicCapIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Teachers</p>
                  <p className="text-2xl font-bold">{teachers.length}</p>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 mr-4">
                  <UserGroupIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Students</p>
                  <p className="text-2xl font-bold">{students.length}</p>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 mr-4">
                  <ChartBarIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Avg. Attendance</p>
                  <p className="text-2xl font-bold">94%</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Teachers Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold flex items-center">
                <AcademicCapIcon className="h-5 w-5 mr-2 text-blue-500" />
                Teachers
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subjects</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Students</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teachers.map((teacher) => (
                    <tr key={teacher.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{teacher.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-500">
                          <EnvelopeIcon className="h-4 w-4 mr-1" />
                          {teacher.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          {teacher.subjects}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{teacher.students}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Students Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold flex items-center">
                <UserGroupIcon className="h-5 w-5 mr-2 text-green-500" />
                Students
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teacher</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Attendance</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{student.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          {student.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{student.teacher}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{student.attendance}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Report;