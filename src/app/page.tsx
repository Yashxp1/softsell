import DarkModeToggle from '@/components/DarkModeToggle';
import Navbar from '@/components/Navbar';
import React from 'react';

const homeBtn = ['Sell my Licenses', 'Learn More'];

const page = () => {
  return (
    <div className="bg-gradient-to-br from-pink-300 via-white to-purple-300 transition-colors h-screen dark:bg-gradient-to-br dark:from-black dark:via-blue-950 dark:to-black">
      <div className="p-4">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center dark:text-shadow-lg px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-20 lg:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent drop-shadow-sm animate-gradient-x max-w-6xl mx-auto">
          Unlock the Value of Your Unused Software Licenses.
        </h1>

        <p className="mt-6 text-lg sm:text-xl font-semibold md:text-2xl text-pink-500 dark:text-blue-300 max-w-3xl mx-auto">
          SoftSell makes it easy to sell your unused or surplus software
          licenses for the best price, with zero hassle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 px-4">
          {homeBtn.map((btnText, idx) => (
            <button
              key={idx}
              className={`px-6 py-3 rounded-lg font-medium text-lg w-full sm:w-auto transition-all transform hover:scale-105 ${
                idx === 0
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500 text-white shadow-md hover:shadow-lg'
                  : 'border-2 border-purple-500 dark:border-purple-400 text-purple-500 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30'
              }`}
            >
              {btnText}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
