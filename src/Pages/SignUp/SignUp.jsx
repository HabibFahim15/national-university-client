import {
    Card,
    Input,
    Typography,
  } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SignUp = () => {

  const axiosPublic =useAxiosPublic();

  const {createUser,updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = event =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const role = form.role.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    console.log(name, role, email, password, image);
    createUser(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(name, image)
      .then(()=>{
        console.log('user profile updated');
       
              const userInfo ={
                name: name,
                email: email,
                role: role,
                isVarified: false,
                salary: 0
              }

              axiosPublic.post('/users', userInfo)
              .then(res =>{
                if(res.data.insertedId){
                  console.log('user added the database');
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
                    title: "Account created successfully"
                  });
                }
              }
                )


              navigate('/')
      })
      .catch(error => console.log(error))
    })
  }
    return (
        <div className="flex item-center justify-center md:py-40 py-8 min-h-screen bg-no-repeat bg-cover bg-[url('https://c4.wallpaperflare.com/wallpaper/662/618/496/natur-2560x1600-sceneries-wallpaper-preview.jpg')]">
        <Card className="backdrop-blur-lg px-8 py-10 md:px-16 md:py-20" color="transparent" shadow={false}>
          <Typography className="text-4xl font-semibold text-gray-200">
            Sign Up
          </Typography>
          <Typography className="mt-1 text-gray-200 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form onSubmit={handleSignUp} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              
              <Typography variant="h6" className="-mb-3 text-gray-300">
                Full Name
              </Typography>
              <Input
                size="lg"
                placeholder="Enter your name"
                name="name"
                className="!border-t-blue-gray-400 text-white focus:!border-gray-600"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
      
              <Typography variant="h6" className="-mb-3 text-gray-300">
                Role
              </Typography>
              <select name="role" className="bg-transparent border-b border-blue-gray-400 text-white px-3 py-2 focus:outline-none focus:border-gray-600">
                <option className="text-black" value="">Select Role</option>
                <option className="text-black" value="teacher">Teacher</option>
                <option className="text-black" value="student">Student</option>
                <option className="text-black" value="parent">Parent</option>
              </select>
      
              <Typography variant="h6" className="-mb-3 text-gray-300">
                Your Gmail
              </Typography>
              <Input
                size="lg"
                placeholder="yourname@gmail.com"
                name="email"
                className="!border-t-blue-gray-400 text-white focus:!border-gray-600"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
      
              <Typography variant="h6" className="-mb-3 text-gray-300">
                Password
              </Typography>
              <Input
                type="password"
                name="password"
                size="lg"
                placeholder="Enter Your Password"
                className="!border-t-blue-gray-400 text-orange-500 focus:!border-gray-600"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
      
              <Typography variant="h6" className="-mb-3 text-gray-300">
                Upload Image
              </Typography>
              <Input
                type="password"
                name="image"
                size="lg"
                placeholder="Enter Your Password"
                className="!border-t-blue-gray-400 text-orange-500 focus:!border-gray-600"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
      
            <input className="w-full bg-gray-900 hover:bg-gray-800 rounded-md text-white py-2 mt-5" type="submit" value="Sign Up" />
            <Typography color="white" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to={'/signin'} className="font-medium text-gray-500">
                Sign In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
      

    );
};

export default SignUp;