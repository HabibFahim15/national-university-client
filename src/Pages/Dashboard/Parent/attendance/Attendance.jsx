import { FaCalendarAlt,FaUserGraduate, FaUserCheck, FaUserTimes, FaUserClock, FaChevronLeft, FaChevronRight, FaPrint } from 'react-icons/fa';
import { useState } from 'react';

const ParentAttendancePage = () => {
  // Sample data for multiple children
  const children = [
    {
      id: 1,
      name: "Sarah Johnson",
      grade: "Grade 10",
      avatarColor: "bg-blue-100 text-blue-600",
      monthlyAttendance: {
        present: 18,
        absent: 2,
        late: 1,
        rate: "90%"
      },
      dailyRecords: [
        { date: "2023-11-01", status: "present" },
        { date: "2023-11-02", status: "present" },
        { date: "2023-11-03", status: "absent" },
        // More dates...
      ]
    },
    {
      id: 2,
      name: "Michael Johnson",
      grade: "Grade 8",
      avatarColor: "bg-green-100 text-green-600",
      monthlyAttendance: {
        present: 16,
        absent: 1,
        late: 3,
        rate: "94%"
      },
      dailyRecords: [
        { date: "2023-11-01", status: "late" },
        { date: "2023-11-02", status: "present" },
        { date: "2023-11-03", status: "present" },
        // More dates...
      ]
    }
  ];

  const [currentChildIndex, setCurrentChildIndex] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const currentChild = children[currentChildIndex];

  // Month navigation
  const months = ["January", "February", "March", "April", "May", "June", 
                 "July", "August", "September", "October", "November", "December"];

  const changeMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  // Generate calendar days for the current month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const days = [];
    
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const record = currentChild.dailyRecords.find(r => r.date === dateStr);
      
      days.push(
        <div key={i} className="p-2 border-b border-r flex flex-col items-center">
          <span className="text-sm mb-1">{i}</span>
          {record ? (
            <div className={`rounded-full p-1 ${
              record.status === "present" ? "bg-green-100 text-green-600" :
              record.status === "absent" ? "bg-red-100 text-red-600" :
              "bg-yellow-100 text-yellow-600"
            }`}>
              {record.status === "present" ? <FaUserCheck /> :
               record.status === "absent" ? <FaUserTimes /> : <FaUserClock />}
            </div>
          ) : (
            <div className="rounded-full p-1 bg-gray-100 text-gray-400">
              <FaCalendarAlt size={14} />
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header with Child Selector */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full ${currentChild.avatarColor} flex items-center justify-center`}>
            <FaUserGraduate />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">{currentChild.name}</h1>
            <p className="text-gray-600">{currentChild.grade}</p>
          </div>
        </div>
        
        {/* Child Switcher */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentChildIndex(prev => prev === 0 ? children.length - 1 : prev - 1)}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <FaChevronLeft />
          </button>
          
          <div className="flex gap-1">
            {children.map((child, index) => (
              <button
                key={child.id}
                onClick={() => setCurrentChildIndex(index)}
                className={`w-2 h-2 rounded-full ${index === currentChildIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`View ${child.name}'s attendance`}
              />
            ))}
          </div>
          
          <button 
            onClick={() => setCurrentChildIndex(prev => prev === children.length - 1 ? 0 : prev + 1)}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Month Navigation */}
      <div className="bg-white rounded-lg shadow border p-4 mb-6 flex justify-between items-center">
        <button 
          onClick={() => changeMonth('prev')}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>
        
        <h2 className="text-xl font-bold">
          {months[currentMonth]} {currentYear}
        </h2>
        
        <button 
          onClick={() => changeMonth('next')}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Attendance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow border p-4 flex items-center gap-4">
          <div className="p-3 rounded-full bg-green-100 text-green-600">
            <FaUserCheck size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Days Present</p>
            <p className="font-bold text-lg">{currentChild.monthlyAttendance.present}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow border p-4 flex items-center gap-4">
          <div className="p-3 rounded-full bg-red-100 text-red-600">
            <FaUserTimes size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Days Absent</p>
            <p className="font-bold text-lg">{currentChild.monthlyAttendance.absent}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow border p-4 flex items-center gap-4">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <FaUserClock size={20} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Times Late</p>
            <p className="font-bold text-lg">{currentChild.monthlyAttendance.late}</p>
          </div>
        </div>
      </div>

      {/* Attendance Rate */}
      <div className="bg-white rounded-lg shadow border p-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold">Attendance Rate</h3>
          <span className="font-bold">{currentChild.monthlyAttendance.rate}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-green-600 h-4 rounded-full" 
            style={{ width: currentChild.monthlyAttendance.rate }}
          ></div>
        </div>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-lg shadow border overflow-hidden mb-6">
        <div className="grid grid-cols-7 bg-gray-100">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-2 text-center font-medium text-sm">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {renderCalendarDays()}
        </div>
      </div>

      {/* Legend and Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full p-1 bg-green-100 text-green-600">
              <FaUserCheck size={14} />
            </div>
            <span className="text-sm">Present</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full p-1 bg-red-100 text-red-600">
              <FaUserTimes size={14} />
            </div>
            <span className="text-sm">Absent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full p-1 bg-yellow-100 text-yellow-600">
              <FaUserClock size={14} />
            </div>
            <span className="text-sm">Late</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full p-1 bg-gray-100 text-gray-400">
              <FaCalendarAlt size={14} />
            </div>
            <span className="text-sm">No data</span>
          </div>
        </div>
        
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <FaPrint /> Print Report
        </button>
      </div>
    </div>
  );
};

export default ParentAttendancePage;