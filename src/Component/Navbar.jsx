import React, { useState } from 'react';
import { User, ChevronDown, LogOut, Settings, KeyRound, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom'; // import Link

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4  shadow-sm">
      <div className="text-xl font-bold text-green-700"></div>

      <div className="flex items-center gap-4 ">
        <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition cursor-pointer">
          Pay In  ₹:100
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition cursor-pointer ">
          Pay Out  ₹:200
        </button>


        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition cursor-pointer "
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-md z-50">
              <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100" >
                <Settings className="w-4 h-4 mr-2" />

                My Profile
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <KeyRound className="w-4 h-4 mr-2" /> Change Password
              </a>
              <Link
                to="/login"
                className="flex items-center px-4 py-2 hover:bg-gray-100"
              >
                <LogIn className="w-4 h-4 mr-2" /> Login Page
              </Link>


              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-100 text-red-600"
              >
                <LogOut className="w-4 h-4 mr-2" /> Logout

              </a>


            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
