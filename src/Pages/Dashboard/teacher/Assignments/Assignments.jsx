import { FaPlus, FaSearch, FaFilter, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';

const Assignments = () => {
  // Sample data
  const assignments = [
    {
      id: 1,
      title: "Algebra Homework",
      class: "Grade 10 Mathematics",
      dueDate: "2023-11-15",
      submissions: 24,
      totalStudents: 30,
      status: "active"
    },
    {
      id: 2,
      title: "Physics Lab Report",
      class: "Grade 11 Science",
      dueDate: "2023-11-20",
      submissions: 15,
      totalStudents: 25,
      status: "active"
    },
    {
      id: 3,
      title: "History Essay",
      class: "Grade 9 Social Studies",
      dueDate: "2023-11-10",
      submissions: 30,
      totalStudents: 30,
      status: "graded"
    }
  ];

  return (
    <div className="p-6">
      {/* Header and Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Assignments</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <FaPlus /> Create New
          </button>
          <div className="relative flex-grow">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search assignments..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full"
            />
          </div>
          <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-50 transition">
            <FaFilter /> Filter
          </button>
        </div>
      </div>

      {/* Assignment List */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-gray-100 p-4 font-semibold text-gray-700">
          <div className="col-span-5">Assignment</div>
          <div className="col-span-2">Class</div>
          <div className="col-span-2">Due Date</div>
          <div className="col-span-2">Submissions</div>
          <div className="col-span-1">Actions</div>
        </div>

        {/* Assignment Items */}
        {assignments.map((assignment) => (
          <div key={assignment.id} className="grid grid-cols-12 p-4 border-b hover:bg-gray-50 transition items-center">
            <div className="col-span-5 flex items-center gap-3">
              <FaFileAlt className="text-blue-500 text-xl" />
              <div>
                <h3 className="font-medium">{assignment.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  assignment.status === 'graded' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {assignment.status === 'graded' ? 'Graded' : 'Active'}
                </span>
              </div>
            </div>
            <div className="col-span-2 text-gray-600">{assignment.class}</div>
            <div className="col-span-2 flex items-center gap-2 text-gray-600">
              <FaCalendarAlt className="text-gray-400" />
              {new Date(assignment.dueDate).toLocaleDateString()}
            </div>
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm">
                  {assignment.submissions}/{assignment.totalStudents}
                </span>
              </div>
            </div>
            <div className="col-span-1 flex justify-end">
              <button className="text-blue-600 hover:text-blue-800">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Assignment Modal (would be toggled) */}
      {/* <AssignmentForm /> */}

      {/* Empty State */}
      {assignments.length === 0 && (
        <div className="text-center py-12">
          <FaFileAlt className="mx-auto text-4xl text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-700">No assignments yet</h3>
          <p className="text-gray-500 mb-4">Create your first assignment to get started</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Create Assignment
          </button>
        </div>
      )}
    </div>
  );
};

export default Assignments;