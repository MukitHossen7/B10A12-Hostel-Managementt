import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link } from "react-router-dom";
import loginImg from "../../../src/assets/Auth/Login-bro.svg";
import { useForm } from "react-hook-form";
const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    reset();
    setIsLoading(false);
  };
  return (
    <div>
      <div className="flex flex-col md:gap-4 lg:gap-10 lg:flex-row justify-center items-center min-h-screen bg-white w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <div className="">
          <img
            src={loginImg}
            className="w-full md:w-[400px] lg:w-[500px]"
          ></img>
        </div>
        <div className="flex flex-col w-full md:w-[500px]  p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-semibold">Log In</h1>
          </div>
          <form
            className="space-y-6 ng-untouched ng-pristine ng-valid"
            onSubmit={handleSubmit(handleLogin)}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address<span className="text-red-500 font-bold">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs font-medium">
                    Email is Required
                  </span>
                )}
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password<span className="text-red-500 font-bold">*</span>
                  </label>
                </div>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  autoComplete="current-password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                />
                {errors.password && (
                  <span className="text-red-500 text-xs font-medium">
                    Password is Required
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                onClick={() => setIsLoading(true)}
                type="submit"
                className="bg-lime-500 w-full rounded-md py-3 text-white"
              >
                {isLoading ? (
                  <TbFidgetSpinner className="animate-spin m-auto" />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button className="text-xs hover:underline hover:text-lime-500 text-gray-400">
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don&apos;t have an account yet?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:text-lime-500 text-gray-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
