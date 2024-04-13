// Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white-600 to-white-600 text-white border-b">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="text-lg  text-black font-bold font-sans">Expenses Tracking</div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 text-sm text-white bg-gray-800 rounded-md">
            Sign In
          </button>
          <img
            src="https://kaspiunique.com/Temp/male.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
