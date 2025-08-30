import React, { useContext } from "react";
import NavBer from "../../Pages/Shared/Navber/NavBer";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photoUrl, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="">
        <NavBer />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <form
            onSubmit={handleRegister}
            className="bg-white shadow-md rounded-2xl p-6 w-full max-w-xl space-y-4"
          >
            <h1 className="text-xl font-bold text-center">
              Register your account
            </h1>
            {/* name */}
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            {/* Photo URL */}
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your Photo URL"
                className="w-full px-3 py-2 border border-nu60 placeholder:text-nu20 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
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
            <div className="flex items-center gap-2">
              <input type="checkbox" name="terms" />
              <p>Accept our Terms & Condition</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-xl hover:bg-secondary1 duration-500 hover:text-nu20 font-bold"
            >
              Register
            </button>
            <div className="text-center">
              <p>
                Already have an account?
                <Link
                  to={"/login"}
                  className="text-primary hover:text-secondary1 duration-500 font-semibold ml-1"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
