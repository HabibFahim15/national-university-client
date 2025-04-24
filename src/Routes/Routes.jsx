import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../Pages/SignIn/SignIn"
import SignUp from "../Pages/SignUp/SignUp"
import Error from "../Pages/Error/Error";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Teacher from "../Pages/Dashboard/admin/Teacher";
import Students from "../Pages/Dashboard/admin/Students";
import Parents from "../Pages/Dashboard/admin/Parents";
import Exam from "../Pages/Dashboard/admin/Exam";
import Events from "../Pages/Dashboard/admin/Events";
import Attendance from "../Pages/Dashboard/admin/Attendance";
import Class from "../Pages/Dashboard/admin/Class";
import PrivateRoute from "./PrivateRoute";

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
          path: '/Teacher',
          element: <PrivateRoute><Teacher /></PrivateRoute>
        },
        {
          path: '/students', 
          element: <PrivateRoute><Students /></PrivateRoute> 
        },
        {
          path: '/parents',
          element:<PrivateRoute><Parents /></PrivateRoute>
        },
        {
          path: '/exam',
          element: <PrivateRoute><Exam /></PrivateRoute>
        },
        {
          path: '/events',
          element: <PrivateRoute><Events /></PrivateRoute>
        },
        {
          path: '/attendance',
          element: <PrivateRoute><Attendance /></PrivateRoute>
        },
        {
          path: '/class',
          element: <PrivateRoute><Class /></PrivateRoute>
        }
        

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