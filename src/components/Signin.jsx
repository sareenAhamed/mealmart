import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  // Close the modal and navigate to the home page
  const handleClose = () => {
    navigate("/"); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-96 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={handleClose}
        >
          &times;
        </button>

        {/* Form Title */}
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {/* Login Form */}
        <form>
          {/* Email Field */}
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

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>

        {/* Link to Register Page */}
        <p className="text-sm text-center mt-4">
          Create a new account?{" "}
          <Link to="/register" className="text-red-500 hover:underline">
            Click Here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
