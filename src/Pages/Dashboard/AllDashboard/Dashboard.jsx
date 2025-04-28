import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Spinner } from "@material-tailwind/react";
import AdminDashboard from "../admin/AdminDashboard";
import TeacherDashboard from "../teacher/TeacherDashboard";
import StudentDashboard from "../Student/StudentDashboard";
import ParentDashboard from "../Parent/ParentDashboard";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);
    
    // Get user data including role
   useEffect(() => {
    const fetchCurrentUser = async () => {
        try {
          // Replace with your real API endpoint to get the logged-in user's data
          const res = await fetch(`http://localhost:5000/users/${user?.email}`);
          const data = await res.json();
          setCurrentUser(data);
        } catch (err) {
          console.error("Failed to fetch user data:", err);
        }
      };
  
      if (user?.email) {
        fetchCurrentUser();
      }
   }, [user]); 
   console.log(currentUser);
    const renderDashboardContent = () => {
        switch(currentUser?.role) {
            case 'admin':
                return (
                    <div>
                       <AdminDashboard />
                    </div>
                );
            case 'teacher':
                return (
                    <div>
                       <TeacherDashboard />
                    </div>
                );
            case 'student':
                return (
                    <div>
                       <StudentDashboard />
                    </div>
                );
            case 'parent':
                return (
                    <div>
                        <ParentDashboard />
                    </div>
                );
            default:
                return <Spinner />
        }
    };

    return (
        <div className="dashboard-container">
            {renderDashboardContent()}
        </div>
    );
};

export default Dashboard;