import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../Pages/SignIn/SignIn"
import SignUp from "../Pages/SignUp/SignUp"
import Error from "../Pages/Error/Error";
import Dashboard from "../Pages/Dashboard/AllDashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllStudent from "../Pages/Dashboard/admin/StudentsManagement/AllStudent";
import Reports from "../Pages/Dashboard/admin/Reports";
import Notice from "../Pages/Dashboard/admin/Notice";
import AllClasses from "../Pages/Dashboard/admin/AllClasses";
import AllParents from "../Pages/Dashboard/admin/ParentsManagement/AllParents";
import AllTeachers from "../Pages/Dashboard/admin/TeachersManagement/AllTeachers";
import MyClasses from "../Pages/Dashboard/teacher/myClasses/MyClasses";
import Assignments from "../Pages/Dashboard/teacher/Assignments/Assignments";
import GradeBook from "../Pages/Dashboard/teacher/GradeBook/GradeBook";
import Attendance from "../Pages/Dashboard/teacher/Attendance/Attendance";
import MyCoursePage from "../Pages/Dashboard/Student/MyCourse/MyCoursePage";
import AssignmentsPage from "../Pages/Dashboard/Student/AssignmentPage/AssignmentPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error/>,
      children:[
        {
            path: '/',
            element: <PrivateRoute><Dashboard /></PrivateRoute>
        },
        // admin dashboard
       {
        path: '/admin-students',
        element: <PrivateRoute><AllStudent /></PrivateRoute>
       },
       {
        path: '/admin-teachers',
        element: <PrivateRoute><AllTeachers /></PrivateRoute>
       },
       {
        path: '/admin-parents',
        element: <PrivateRoute><AllParents /></PrivateRoute>
       },
       {
        path: '/admin-classes',
        element: <PrivateRoute><AllClasses /></PrivateRoute>
       },
       {
        path: '/admin-notice',
        element: <PrivateRoute><Notice /></PrivateRoute>
       },
       {
        path: '/admin-reports',
        element: <PrivateRoute><Reports /></PrivateRoute>
       },
       // Teacher dashboard
       {
        path: '/teacher-my-classes',
        element: <PrivateRoute><MyClasses /></PrivateRoute>
       },
       {
        path: '/teacher-assignments',
        element: <PrivateRoute><Assignments /></PrivateRoute>
       },
       {
        path: '/teacher-grades',
        element: <PrivateRoute><GradeBook /></PrivateRoute>
       },
       {
        path: '/teacher-attendance',
        element: <PrivateRoute><Attendance /></PrivateRoute>
       },
       // Student dashboard
        {
          path: '/my-courses',
          element: <PrivateRoute><MyCoursePage /></PrivateRoute>
        },
        {
          path: '/assignments',
          element: <PrivateRoute><AssignmentsPage /></PrivateRoute>
        },

      ]
      
    },
    {
      path: '/signin',
      element: <SignIn />
    },
    {
      path:'/signup',
      element: <SignUp />
    }
  ]);

  export default router;