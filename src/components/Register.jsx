import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Redirect to Menu page
  };
 
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500" onClick={handleClose}
        >
          &times;
        </button>
        

        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Create a password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition" onClick={handleClose}
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-red-500 hover:underline"
          >
            Sign in here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
