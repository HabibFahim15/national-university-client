import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <h1 className="mb-8">This is Sign up Page</h1>
            <Link className=" border px-8 py-3 bg-slate-300 text-black font-semibold rounded-xl" to={'/signup'}>Signup</Link>
        </div>
    );
};

export default SignIn;