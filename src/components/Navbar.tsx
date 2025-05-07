import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav>
      <div className="">
        <div className="flex justify-between items-center  py-1">
          <div className="text-2xl backdrop-blur-md bg-white/30 dark:bg-black/30 border border-pink-500 dark:border-gray-700/50 shadow-sm rounded-full px-4 cursor-pointer hover:scale-110 transition-all font-bold py-2  text-pink-600 dark:text-blue-400">
            SoftSell
          </div>
          <div>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
