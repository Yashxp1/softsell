import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20">
      <div className="flex  justify-between items-center  py-1">
        <div className="text-2xl backdrop-blur-md bg-white/30 border-pink-500 dark:bg-white shadow-sm rounded-full px-4 cursor-pointer hover:scale-110 transition-all font-bold py-2  text-pink-600">
          SoftSell
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
