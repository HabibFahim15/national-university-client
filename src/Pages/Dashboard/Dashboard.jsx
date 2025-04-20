import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <h1>This is Dashboard Page</h1><br />
            <Link to={'/signin'}><Button>Login</Button></Link>
        </div>
    );
};

export default Dashboard;