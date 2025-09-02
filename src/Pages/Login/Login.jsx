// import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBer from "../Shared/Navber/NavBer";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { singInEmailPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location is a ", location);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // sing in with email and password
    singInEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
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

            {/* Email */}
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

            {/* Password */}
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
              className="w-full bg-primary text-white py-2 rounded-xl hover:bg-secondary1 duration-500 hover:text-nu20 font-bold"
            >
              Login
            </button>
            <div className="text-center">
              <p>
                Dont’t Have An Account ?{" "}
                <Link
                  to={"/register"}
                  className="text-primary hover:text-secondary1 duration-500 font-semibold"
                >
                  Register
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
