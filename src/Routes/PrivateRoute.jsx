import { useContext } from "react";
import {AuthContext} from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/shared/spinner";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner />
    }
   if(user) {
    return children;
   }
   return <Navigate to={'/signin'} state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;