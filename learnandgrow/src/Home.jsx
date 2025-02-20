import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                SnapED codeCampus
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="px-3 py-2 text-gray-800 hover:text-blue-500"
              >
                Login
              </Link>
              <div className="relative group">
                <button className="px-3 py-2 text-gray-800 hover:text-blue-500">
                  Sign Up
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to="/signup/student"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sign Up as Student
                  </Link>
                  <Link
                    to="/signup/trainer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sign Up as Trainer
                  </Link>
                  <Link
                    to="/signup/company"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sign Up as Company
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-blue-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-800 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/signup/student"
                className="block px-3 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sign Up as Student
              </Link>
              <Link
                to="/signup/trainer"
                className="block px-3 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sign Up as Trainer
              </Link>
              <Link
                to="/signup/company"
                className="block px-3 py-2 text-gray-800 hover:bg-gray-100"
              >
                Sign Up as Company
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Home Page Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-8">Home Page</h1>
      </div>
    </>
  );
};

export default Home;