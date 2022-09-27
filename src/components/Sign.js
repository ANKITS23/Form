import React, { Component } from "react";
import { useState } from "react";
const SignIn = () => {
  const [hide, setHide] = useState(true);

  return (
    <div className="main-container">
      <div className="wrapper">
        <div className="fixed  px-5 h-full left-1/2 top-[22%] transform translate-x-[-50%] z-10  ">
          <div className="w-full p-6 m-auto bg-white rounded-md border-2">
            <h1 className="text-3xl font-semibold text-center">Sign in</h1>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  for="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md   focus:outline-none "
                />
              </div>
              <div className="mb-2">
                <label
                  for="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border "
                />
              </div>
              <a href="#" className="text-xs text-gray-600 hover:underline">
                Forget Password?
              </a>
              <div className="mt-6">
                <button className="border w-full px-4 py-2 ">Login</button>
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Don't have an account?{" "}
              <a
                href="#"
                className="font-medium text-gray-600 hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
