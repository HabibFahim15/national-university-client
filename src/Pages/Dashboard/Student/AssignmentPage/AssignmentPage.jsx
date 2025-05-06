import { useState } from 'react';
import { FaSearch, FaFilter, FaFileUpload, FaCalendarAlt, FaCheckCircle, FaClock } from 'react-icons/fa';

const AssignmentsPage = () => {
  // Sample assignments data
  const assignments = [
    {
      id: 1,
      title: "Algebra Homework",
      course: "Mathematics",
      dueDate: "2023-11-15",
      status: "submitted",
      grade: "A-",
      submittedOn: "2023-11-14"
    },
    {
      id: 2,
      title: "History Essay",
      course: "Social Studies",
      dueDate: "2023-11-20",
      status: "pending",
      grade: null,
      submittedOn: null
    },
    {
      id: 3,
      title: "Science Lab Report",
      course: "Physics",
      dueDate: "2023-11-10",
      status: "missing",
      grade: null,
      submittedOn: null
    },
    {
      id: 4,
      title: "Literature Review",
      course: "English",
      dueDate: "2023-11-25",
      status: "pending",
      grade: null,
      submittedOn: null
    }
  ];

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter assignments
  const filteredAssignments = assignments.filter(assignment => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         assignment.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || assignment.status === filter;
    return matchesSearch && matchesFilter;
  });

  // Calculate upcoming and overdue assignments
  const upcomingCount = assignments.filter(a => a.status === "pending" && new Date(a.dueDate) > new Date()).length;
  const overdueCount = assignments.filter(a => a.status === "missing").length;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Assignments</h1>
        <p className="text-gray-600">View and submit your coursework</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <FaCalendarAlt size={20} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Total Assignments</h3>
            <p className="font-bold text-lg">{assignments.length}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <FaClock size={20} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Upcoming</h3>
            <p className="font-bold text-lg">{upcomingCount}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border flex items-center gap-4">
          <div className="p-3 rounded-full bg-red-100 text-red-600">
            <FaClock size={20} />
          </div>
          <div>
            <h3 className="text-gray-500 text-sm">Overdue</h3>
            <p className="font-bold text-lg">{overdueCount}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search assignments..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-lg px-4 py-2 bg-white"
          >
            <option value="all">All Assignments</option>
            <option value="submitted">Submitted</option>
            <option value="pending">Pending</option>
            <option value="missing">Missing</option>
          </select>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <FaFilter /> Filter
          </button>
        </div>
      </div>

      {/* Assignments List */}
      <div className="bg-white rounded-lg shadow overflow-hidden border">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">Assignment</th>
                <th className="py-3 px-4 text-left font-semibold">Course</th>
                <th className="py-3 px-4 text-left font-semibold">Due Date</th>
                <th className="py-3 px-4 text-left font-semibold">Status</th>
                <th className="py-3 px-4 text-left font-semibold">Grade</th>
                <th className="py-3 px-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssignments.map(assignment => (
                <tr key={assignment.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{assignment.title}</td>
                  <td className="py-3 px-4 text-gray-600">{assignment.course}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-400" />
                      {new Date(assignment.dueDate).toLocaleDateString()}
                      {new Date(assignment.dueDate) < new Date() && assignment.status !== "submitted" && (
                        <span className="text-xs text-red-500">(Overdue)</span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {assignment.status === "submitted" ? (
                      <span className="flex items-center gap-1 text-green-600">
                        <FaCheckCircle /> Submitted
                      </span>
                    ) : assignment.status === "pending" ? (
                      <span className="text-yellow-600">Pending</span>
                    ) : (
                      <span className="text-red-600">Missing</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {assignment.grade ? (
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        assignment.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                        assignment.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                        assignment.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {assignment.grade}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {assignment.status === "pending" || assignment.status === "missing" ? (
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                        <FaFileUpload /> Submit
                      </button>
                    ) : (
                      <button className="text-gray-600 hover:text-gray-800 text-sm">
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredAssignments.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed rounded-lg mt-6">
          <p className="text-gray-500">No assignments found</p>
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

export default AssignmentsPage;