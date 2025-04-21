import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const SignIn = () => {
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
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" className="-mb-3 text-gray-300">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="Your Email"
              className=" !border-t-blue-gray-400 text-white focus:!border-gray-600"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" className="-mb-3 text-gray-300">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Enter Your Password"
              className="  !border-t-blue-gray-400 text-orange-500 focus:!border-gray-600"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth>
            sign in
          </Button>
          <Typography color="white" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to={"/signup"} className="font-medium text-gray-500">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
