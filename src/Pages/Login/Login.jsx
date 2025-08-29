// import React, { useState } from "react";
import NavBer from "../Shared/Navber/NavBer";

const Login = () => {

    
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");

    console.log(email);
  };
  return (
    <div>
      <div className="">
        <NavBer />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-2xl p-6 w-full max-w-xl space-y-4"
          >
            <h1 className="text-xl font-bold text-center">
              Login your account
            </h1>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700"
            >
              Login
            </button>
          </form>
        </div>
        );
      </div>
    </div>
  );
};

export default Login;
