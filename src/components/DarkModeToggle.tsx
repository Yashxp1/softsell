'use client';

import { useDarkMode } from '@/context/DarkThemeContext';
import { Moon, Sun } from 'lucide-react';
import React from 'react';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <div className="">
      <button
        className="transition-colors flex justify-center items-center p-2 rounded-full bg-purple-200 text-pink-600 hover:bg-pink-200 hover:text-purple-700 dark:bg-blue-800 dark:text-blue-200 dark:hover:bg-blue-900 dark:hover:text-white"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
