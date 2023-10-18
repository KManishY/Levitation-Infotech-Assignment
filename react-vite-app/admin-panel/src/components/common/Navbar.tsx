import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-bold">Levitation</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-blue-200">
                MultiStepForm
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-blue-200">
                Login
              </Link>
            </li>
            <li>
              <Link to="/registration" className="text-white hover:text-blue-200">
              Registration
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
