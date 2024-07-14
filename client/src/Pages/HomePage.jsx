import React from "react";
import { Link } from "react-router-dom";
import HomePage2 from '../../assets/HomePage.png';

const HomePage = () => {
  return (
    <div className="pt-10 text-gray-800 flex items-center justify-center gap-10 mx-16 my-4 px-5 h-[90vh] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-1/2 space-y-6 mb-32 px-2 bg-white bg-opacity-80 p-10 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold font-sans leading-tight text-gray-900">
          Welcome to <span className="text-yellow-500 font-extrabold">CodeJudge</span>
        </h1>
        <p className="text-2xl text-gray-700">
          Explore a vast collection of coding problems crafted by experts to help you sharpen your skills.
        </p>
        <div className="space-x-6">
          <Link to="/problems">
            <button className="bg-yellow-500 px-6 py-3 rounded-full text-xl font-medium text-gray-900 hover:bg-yellow-600 transition-transform transform hover:scale-105 ease-in-out duration-300 shadow-md">
              Start Coding
            </button>
          </Link>
          <Link to="/contact">
            <button className="border border-yellow-500 px-6 py-3 rounded-full text-xl font-medium text-gray-900 hover:bg-yellow-600 hover:text-white transition-transform transform hover:scale-105 ease-in-out duration-300 shadow-md">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center mb-32">
        <img src={HomePage2} alt="Coding Illustration" className="rounded-lg shadow-lg border-4 border-white" />
      </div>
    </div>
  );
};

export default HomePage;
