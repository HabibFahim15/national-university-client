import { FaCalendarAlt, FaClock, FaSearch, FaPrint } from 'react-icons/fa';

const SchedulePage = () => {
  // Sample schedule data
  const weeklySchedule = [
    { 
      day: 'Monday',
      classes: [
        { time: '08:00 - 09:30', subject: 'Mathematics', room: 'Room 204', teacher: 'Mr. Johnson' },
        { time: '09:45 - 11:15', subject: 'Physics', room: 'Lab 3', teacher: 'Ms. Williams' },
        { time: '11:30 - 13:00', subject: 'English', room: 'Room 105', teacher: 'Mr. Brown' },
        { time: '14:00 - 15:30', subject: 'History', room: 'Room 112', teacher: 'Ms. Davis' }
      ]
    },
    { 
      day: 'Tuesday',
      classes: [
        { time: '08:00 - 09:30', subject: 'Chemistry', room: 'Lab 2', teacher: 'Mr. Wilson' },
        { time: '09:45 - 11:15', subject: 'Mathematics', room: 'Room 204', teacher: 'Mr. Johnson' },
        { time: '11:30 - 13:00', subject: 'Physical Education', room: 'Gym', teacher: 'Coach Taylor' }
      ]
    },
    // Add Wednesday-Friday...
  ];

  const upcomingEvents = [
    { date: 'Nov 15', title: 'Midterm Exams', type: 'exam' },
    { date: 'Nov 20', title: 'Science Fair', type: 'event' },
    { date: 'Nov 25', title: 'Parent-Teacher Conference', type: 'meeting' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">My Schedule</h1>
          <p className="text-gray-600">Fall Semester 2023</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50">
            <FaPrint /> Print
          </button>
        </div>
      </div>

      {/* Schedule View */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* Weekly Schedule */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow border overflow-hidden">
            {/* Schedule Header */}
            <div className="bg-gray-100 px-6 py-3 flex justify-between items-center">
              <h2 className="font-bold">Weekly Class Schedule</h2>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-500" />
                <span>Week of Nov 6 - Nov 10</span>
              </div>
            </div>

            {/* Schedule Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="py-3 px-4 text-left">Day</th>
                    <th className="py-3 px-4 text-left">Time</th>
                    <th className="py-3 px-4 text-left">Subject</th>
                    <th className="py-3 px-4 text-left">Room</th>
                    <th className="py-3 px-4 text-left">Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((daySchedule, index) => (
                    <>
                      {daySchedule.classes.map((classItem, classIndex) => (
                        <tr 
                          key={`${index}-${classIndex}`} 
                          className="border-b hover:bg-gray-50"
                        >
                          {classIndex === 0 && (
                            <td 
                              rowSpan={daySchedule.classes.length} 
                              className="py-3 px-4 font-medium border-r"
                            >
                              {daySchedule.day}
                            </td>
                          )}
                          <td className="py-3 px-4 flex items-center gap-2">
                            <FaClock className="text-gray-400" /> {classItem.time}
                          </td>
                          <td className="py-3 px-4 font-medium">{classItem.subject}</td>
                          <td className="py-3 px-4">{classItem.room}</td>
                          <td className="py-3 px-4">{classItem.teacher}</td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow border p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaCalendarAlt className="text-purple-500" /> Upcoming Events
          </h2>
          
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-b pb-3 last:border-b-0">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded ${
                    event.type === 'exam' ? 'bg-red-100 text-red-600' :
                    event.type === 'event' ? 'bg-blue-100 text-blue-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    <FaCalendarAlt />
                  </div>
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's Classes */}
      <div className="bg-white rounded-lg shadow border p-6">
        <h2 className="text-xl font-bold mb-4">Today's Classes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {weeklySchedule[0].classes.map((classItem, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">{classItem.subject}</h3>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {classItem.time}
                </span>
              </div>
              <p className="text-gray-600 mb-1">{classItem.teacher}</p>
              <p className="text-gray-500 text-sm">{classItem.room}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;