import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;