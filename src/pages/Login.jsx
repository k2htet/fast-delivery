import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserAuth } from "../context/userAuthContext";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Login = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [loginError, setLoginError] = useState(null);

  const { logIn, user } = useUserAuth();

  let navigate = useNavigate();

  const userData = async ({ email, password }) => {
    try {
      await logIn(email, password);

      navigate("/home");
    } catch (error) {
      setLoginError("Account not found! Please Sign Up.");
      reset();
    }
  };

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <form
        onSubmit={handleSubmit(userData)}
        className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md"
      >
        <h1 className="font-bold text-center text-3xl mb-5">Fast Delivery</h1>
        {loginError && (
          <p className="font-bold text-center text-red-600 mb-5">
            {loginError}
          </p>
        )}
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...register("email")}
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              {...register("password")}
            />
            <button
              to="/"
              type="submit"
              className="transition duration-200 btn btn-primary focus:shadow-sm focus:ring-4  focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
          <div className="py-5">
            <div className="flex items-center justify-center">
              <div className="text-center sm:text-left whitespace-nowrap">
                <Link
                  to="/signup"
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                >
                  <span className="inline-block ml-1">Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block align-text-top"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span className="inline-block ml-1">Back</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
