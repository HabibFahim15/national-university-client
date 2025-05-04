import { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUserCheck, FaUserTimes, FaUserMinus, FaFileExport } from 'react-icons/fa';

const Attendance = () => {
  // Sample data
  const [students, setStudents] = useState([
    { id: 1, name: 'Sarah Johnson', attendance: Array(5).fill('present') },
    { id: 2, name: 'Michael Chen', attendance: Array(5).fill('present') },
    { id: 3, name: 'Emma Williams', attendance: Array(5).fill('present') },
    { id: 4, name: 'James Wilson', attendance: Array(5).fill('present') },
    { id: 5, name: 'Olivia Brown', attendance: Array(5).fill('present') },
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Dates for the week (Mon-Fri)
  const weekDates = Array.from({ length: 5 }, (_, i) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - date.getDay() + 1 + i);
    return date;
  });

  // Toggle attendance status
  const toggleAttendance = (studentId, dayIndex) => {
    if (!isEditing) return;
    
    setStudents(students.map(student => {
      if (student.id === studentId) {
        const newAttendance = [...student.attendance];
        newAttendance[dayIndex] = 
          newAttendance[dayIndex] === 'present' ? 'absent' :
          newAttendance[dayIndex] === 'absent' ? 'late' : 'present';
        return { ...student, attendance: newAttendance };
      }
      return student;
    }));
  };

  // Filter students
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate attendance stats
  const presentCount = students.reduce((count, student) => 
    count + student.attendance.filter(a => a === 'present').length, 0);
  const totalPossible = students.length * weekDates.length;
  const attendanceRate = Math.round((presentCount / totalPossible) * 100);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Class Attendance</h1>
        <p className="text-gray-600">Mathematics - Grade 10</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isEditing ? 'bg-green-100 text-green-800' : 'bg-blue-600 text-white'}`}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Finish Editing' : 'Take Attendance'}
          </button>
          <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50">
            <FaFileExport /> Export
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-green-100 text-green-600">
              <FaUserCheck />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Present</p>
              <p className="font-bold">{presentCount}/{totalPossible}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-red-100 text-red-600">
              <FaUserTimes />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Absent</p>
              <p className="font-bold">{totalPossible - presentCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-blue-100 text-blue-600">
              <FaCalendarAlt />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Attendance Rate</p>
              <p className="font-bold">{attendanceRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden border">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 text-left font-semibold">Student</th>
                {weekDates.map((date, index) => (
                  <th key={index} className="py-3 px-4 text-center font-semibold">
                    {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{student.name}</td>
                  {student.attendance.map((status, dayIndex) => (
                    <td 
                      key={dayIndex} 
                      className={`py-3 px-4 text-center cursor-pointer ${isEditing ? 'hover:bg-gray-100' : ''}`}
                      onClick={() => toggleAttendance(student.id, dayIndex)}
                    >
                      {status === 'present' ? (
                        <span className="inline-block p-1 rounded-full bg-green-100 text-green-600">
                          <FaUserCheck />
                        </span>
                      ) : status === 'absent' ? (
                        <span className="inline-block p-1 rounded-full bg-red-100 text-red-600">
                          <FaUserTimes />
                        </span>
                      ) : (
                        <span className="inline-block p-1 rounded-full bg-yellow-100 text-yellow-600">
                          <FaUserMinus />
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed rounded-lg mt-6">
          <p className="text-gray-500">No students found</p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block p-1 rounded-full bg-green-100 text-green-600">
            <FaUserCheck />
          </span>
          <span>Present</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block p-1 rounded-full bg-red-100 text-red-600">
            <FaUserTimes />
          </span>
          <span>Absent</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block p-1 rounded-full bg-yellow-100 text-yellow-600">
            <FaUserMinus />
          </span>
          <span>Late</span>
        </div>
      </div>
    </div>
  );
};

export default Attendance;