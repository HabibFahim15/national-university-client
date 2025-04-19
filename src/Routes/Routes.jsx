import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SignIn from "../Pages/SignIn/SignIn"
import SignUp from "../Pages/SignUp/SignUp"
import Error from "../Pages/Error/Error";
import Dashboard from "../Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error/>,
      children:[
        {
            path: '/',
            element: <Dashboard />
        },
        {
          path: '/signin',
          element: <SignIn />
        },
        {
          path:'/signup',
          element: <SignUp />
        }
      ]
    },
  ]);

  export default router;