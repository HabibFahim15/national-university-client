import { useState } from 'react';
import { FaSearch, FaSave, FaEdit } from 'react-icons/fa';

const Gradebook = () => {
  // Sample data
  const [students, setStudents] = useState([
    { id: 1, name: 'Sarah Johnson', assignments: ['Homework 1', 'Midterm Exam'], grades: ['B+', 'A-'] },
    { id: 2, name: 'Michael Chen', assignments: ['Homework 1', 'Midterm Exam'], grades: ['A', 'B+'] },
    { id: 3, name: 'Emma Williams', assignments: ['Homework 1', 'Midterm Exam'], grades: ['C+', 'B'] },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editGrades, setEditGrades] = useState({});

  // Start editing grades
  const startEditing = () => {
    const gradesObj = {};
    students.forEach(student => {
      student.assignments.forEach((_, index) => {
        gradesObj[`${student.id}-${index}`] = student.grades[index];
      });
    });
    setEditGrades(gradesObj);
    setIsEditing(true);
  };

  // Save grades
  const saveGrades = () => {
    const updatedStudents = students.map(student => {
      const updatedGrades = student.assignments.map((_, index) => {
        return editGrades[`${student.id}-${index}`] || student.grades[index];
      });
      return { ...student, grades: updatedGrades };
    });
    setStudents(updatedStudents);
    setIsEditing(false);
  };

  // Handle grade change
  const handleGradeChange = (studentId, assignmentIndex, value) => {
    setEditGrades({
      ...editGrades,
      [`${studentId}-${assignmentIndex}`]: value
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Class Gradebook</h1>
      
      {/* Controls */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-64">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
          />
        </div>
        
        {isEditing ? (
          <button 
            onClick={saveGrades}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            <FaSave /> Save Grades
          </button>
        ) : (
          <button 
            onClick={startEditing}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            <FaEdit /> Edit Grades
          </button>
        )}
      </div>

      {/* Grade Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden border">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">Student</th>
              <th className="py-3 px-4 text-left">Homework 1</th>
              <th className="py-3 px-4 text-left">Midterm Exam</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{student.name}</td>
                
                {student.assignments.map((assignment, index) => (
                  <td key={index} className="py-3 px-4">
                    {isEditing ? (
                      <select
                        value={editGrades[`${student.id}-${index}`] || student.grades[index]}
                        onChange={(e) => handleGradeChange(student.id, index, e.target.value)}
                        className="border rounded px-2 py-1"
                      >
                        {['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F'].map(grade => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    ) : (
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        student.grades[index].startsWith('A') ? 'bg-green-100 text-green-800' :
                        student.grades[index].startsWith('B') ? 'bg-blue-100 text-blue-800' :
                        student.grades[index].startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {student.grades[index]}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {students.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed rounded-lg mt-6">
          <p className="text-gray-500">No students in this class</p>
        </div>
      )}
    </div>
  );
};

export default Gradebook;