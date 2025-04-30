import { 
    ClockIcon,
    CalendarIcon,
    AcademicCapIcon,
    UserGroupIcon
  } from "@heroicons/react/24/outline";
  
  const AllClasses = () => {
    // Days of the week
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
    // Sample classes data
    const classes = [
      {
        name: "Class 1-A",
        teacher: "Sarah Johnson",
        subjects: [
          { time: "8:00-9:00", name: "Mathematics" },
          { time: "9:00-10:00", name: "English" },
          { time: "10:30-11:30", name: "Science" },
          { time: "11:30-12:30", name: "History" }
        ]
      },
      {
        name: "Class 2-B",
        teacher: "Robert Chen",
        subjects: [
          { time: "8:00-9:00", name: "English" },
          { time: "9:00-10:00", name: "Mathematics" },
          { time: "10:30-11:30", name: "Art" },
          { time: "11:30-12:30", name: "Science" }
        ]
      },
      {
        name: "Class 3-C",
        teacher: "Maria Garcia",
        subjects: [
          { time: "8:00-9:00", name: "Science" },
          { time: "9:00-10:00", name: "Mathematics" },
          { time: "10:30-11:30", name: "Music" },
          { time: "11:30-12:30", name: "Physical Education" }
        ]
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
              <CalendarIcon className="h-8 w-8 mr-2 text-blue-500" />
              School Class Routine
            </h1>
            <p className="text-gray-600">
              Weekly schedule for all classes
            </p>
          </div>
  
          {/* Class Selector */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <AcademicCapIcon className="h-5 w-5 mr-2 text-blue-500" />
              Select Class
            </h2>
            <div className="flex flex-wrap gap-2">
              {classes.map((cls, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  {cls.name}
                </button>
              ))}
            </div>
          </div>
  
          {/* Routine Display */}
          {classes.map((cls, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold flex items-center">
                  <UserGroupIcon className="h-5 w-5 mr-2 text-green-500" />
                  {cls.name} (Teacher: {cls.teacher})
                </h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                      {days.map((day, i) => (
                        <th key={i} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cls.subjects.map((subject, subIndex) => (
                      <tr key={subIndex}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1 text-gray-400" />
                          {subject.time}
                        </td>
                        {days.map((day, dayIndex) => (
                          <td key={dayIndex} className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{subject.name}</div>
                            <div className="text-xs text-gray-500">Room {dayIndex + 101}</div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AllClasses;