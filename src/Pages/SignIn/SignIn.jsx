import { Card, Input,  Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const SignIn = () => {

  const {signIn} = useContext(AuthContext);

  const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully"
      });
    })
  }

  return (
    <div className="flex item-center justify-center md:py-40 py-8 min-h-screen bg-no-repeat bg-cover bg-[url('https://c4.wallpaperflare.com/wallpaper/662/618/496/natur-2560x1600-sceneries-wallpaper-preview.jpg')]">
      <Card
        className="backdrop-blur-lg px-8 py-10 md:px-16 md:py-20"
        color="transparent"
        shadow={false}
      >
        <Typography className="text-4xl font-semibold text-gray-200">
          Sign In
        </Typography>
        <Typography className="mt-1 text-gray-200 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" className="-mb-3 text-gray-200">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              placeholder="Your Email"
              className=" !border-blue-gray-700 text-white focus:!border-gray-600"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" className="-mb-3 text-gray-200">
              Password
            </Typography>
            <Input
              type="password"
              name="password"
              size="lg"
              placeholder="Enter Your Password"
              className="  !border-blue-gray-700 text-orange-500 focus:!border-gray-600"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
           
            <input className="w-full bg-gray-900 hover:bg-gray-800 rounded-md text-white py-2 mt-5" type="submit" value="Sign In" />
          
          <Typography color="white" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to={"/signup"} className="font-medium text-orange-100">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
