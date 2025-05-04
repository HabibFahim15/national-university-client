import { useState } from 'react';
import { FaSearch, FaSave, FaEdit, FaFileExport } from 'react-icons/fa';

const Gradebook = () => {
  // Sample data - 10 students
  const [students, setStudents] = useState([
    { id: 1, name: 'Sarah Johnson', assignments: ['Homework 1', 'Midterm'], grades: ['B+', 'A-'] },
    { id: 2, name: 'Michael Chen', assignments: ['Homework 1', 'Midterm'], grades: ['A', 'B+'] },
    { id: 3, name: 'Emma Williams', assignments: ['Homework 1', 'Midterm'], grades: ['C+', 'B'] },
    { id: 4, name: 'James Wilson', assignments: ['Homework 1', 'Midterm'], grades: ['A-', 'A'] },
    { id: 5, name: 'Olivia Brown', assignments: ['Homework 1', 'Midterm'], grades: ['B', 'B+'] },
    { id: 6, name: 'William Taylor', assignments: ['Homework 1', 'Midterm'], grades: ['B-', 'C+'] },
    { id: 7, name: 'Sophia Martinez', assignments: ['Homework 1', 'Midterm'], grades: ['A', 'A-'] },
    { id: 8, name: 'Benjamin Anderson', assignments: ['Homework 1', 'Midterm'], grades: ['B+', 'B'] },
    { id: 9, name: 'Isabella Thomas', assignments: ['Homework 1', 'Midterm'], grades: ['C+', 'B-'] },
    { id: 10, name: 'Mason Jackson', assignments: ['Homework 1', 'Midterm'], grades: ['A-', 'B+'] }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editGrades, setEditGrades] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

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

  // Filter students based on search
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gradebook</h1>
        <p className="text-gray-600">Mathematics - Grade 10 (25 Students)</p>
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
            className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? <FaSave /> : <FaEdit />}
            {isEditing ? 'Save Grades' : 'Edit Grades'}
          </button>
          <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50">
            <FaFileExport /> Export
          </button>
        </div>
      </div>

      {/* Gradebook Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden border">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-semibold">Student</th>
              <th className="py-3 px-4 text-left font-semibold">Homework 1</th>
              <th className="py-3 px-4 text-left font-semibold">Midterm</th>
              <th className="py-3 px-4 text-left font-semibold">Average</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{student.name}</td>
                
                {student.assignments.map((assignment, index) => (
                  <td key={index} className="py-3 px-4">
                    {isEditing ? (
                      <select
                        value={editGrades[`${student.id}-${index}`] || student.grades[index]}
                        onChange={(e) => handleGradeChange(student.id, index, e.target.value)}
                        className="border rounded px-2 py-1 text-sm"
                      >
                        {['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F'].map(grade => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    ) : (
                      <span className={`px-2 py-1 rounded-full text-xs ${
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
                
                <td className="py-3 px-4 font-medium">
                  <span className="px-2 py-1 rounded-full text-xs bg-gray-100">
                    {student.grades[0].charAt(0) === student.grades[1].charAt(0) 
                      ? student.grades[0].charAt(0) 
                      : 'B'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed rounded-lg mt-6">
          <p className="text-gray-500">No students found</p>
        </div>
      )}

      {/* Summary Footer */}
      <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
        <div>
          Showing {filteredStudents.length} of {students.length} students
        </div>
        <div className="flex gap-4">
          <span>Class Average: B+</span>
          <span>Top Grade: A</span>
          <span>Lowest Grade: C+</span>
        </div>
      </div>
    </div>
  );
};

export default Gradebook;