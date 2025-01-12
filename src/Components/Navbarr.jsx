import React from "react";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
        <ul className="flex space-x-4">
          <li>
            <Link 
              to="/" 
              className="font-bold text-xl text-blue-500 hover:text-blue-700 transition-all duration-300"
            >
              Intellicare Healthcare AI
            </Link>
          </li>
          <li>
            <Link 
              to="/" 
              className="hover:text-blue-500 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className="hover:text-blue-500 transition-all duration-300"
            >
              Login/Signup
            </Link>
          </li>
          <li>
            <Link 
              to="/dashboard" 
              className="hover:text-blue-500 transition-all duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/patient-form" 
              className="hover:text-blue-500 transition-all duration-300"
            >
              Patient Form
            </Link>
          </li>
          {/* <li>
            <Link 
              to="/knowledge-graph" 
              className="hover:text-blue-500 transition-all duration-300"
            >
              Knowledge Graph
            </Link>
          </li>
          <li>
            <Link 
              to="/recommendations" 
              className="hover:text-blue-500 transition-all duration-300"
            >
              Recommendations
            </Link>
          </li>
          <li>
            <Link 
              to="/simulation" 
              className="hover:text-blue-500 transition-all duration-300"
            >
              Simulation
            </Link>
          </li>
          <li>
            <Link 
              to="/feedback" 
              className="hover:text-blue-500 transition-all duration-300"
            >
              Feedback
            </Link>
          </li>
          <li>
            <Link 
              to="/admin" 
              className="hover:text-blue-500 transition-all duration-300"
            >
              Admin Panel
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbarr;

