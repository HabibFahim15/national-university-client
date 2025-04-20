import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const SignIn = () => {
    return (
        <div className="flex item-center justify-center md:py-40 py-8 min-h-screen bg-no-repeat bg-cover bg-[url('https://c4.wallpaperflare.com/wallpaper/662/618/496/natur-2560x1600-sceneries-wallpaper-preview.jpg')]">
            <Card className="backdrop-blur-xl px-8 py-10 md:px-16 md:py-20" color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        
        <Button className="mt-6" fullWidth>
          sign in
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={'/signup'} className="font-medium text-gray-900">
            Sign UP
          </Link>
        </Typography>
      </form>
    </Card>
        </div>
    );
};

export default SignIn;