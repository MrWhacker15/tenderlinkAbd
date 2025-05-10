import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Make sure the logo exists

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center">
        <img src={logo} alt="Smart Tender Hub" className="w-24 h-24 mx-auto mb-4 rounded-full" />
        <h1 className="text-4xl font-extrabold text-blue-700 mb-3">Smart Tender Hub</h1>
        <p className="text-gray-700 text-lg mb-6">
          Revolutionize the way you manage tenders — secure, efficient, and intelligent.
        </p>
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
        >
          Get Started
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-600">
        © {new Date().getFullYear()} Smart Tender Hub. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
