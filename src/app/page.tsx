import DarkModeToggle from '@/components/DarkModeToggle';
import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
  return (
    <div className="bg-gradient-to-br from-pink-300 via-white to-purple-300 transition-colors h-screen dark:bg-gradient-to-br dark:from-black dark:via-blue-950 dark:to-black">
      <div className='p-4'>
        <Navbar />
      </div>
    </div>
  );
};

export default page;
