import ContactForm from '@/components/ContactForm';
import DarkModeToggle from '@/components/DarkModeToggle';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Reviews from '@/components/Reviews';
import Working from '@/components/Working';
import React from 'react';

const homeBtn = ['Sell my Licenses', 'Learn More'];

const page = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-pink-100 via-purple-200 to-white min-h-screen bg-pink-50 dark:bg-gradient-to-br dark:from-black dark:via-blue-900 dark:to-black">
      <div className="p-4">
        <Navbar />
      </div>

      <div className="flex flex-col md:mt-16 items-center justify-center  px-4 pt-10 pb-6 sm:px-6 sm:pt-14 sm:pb-10 md:px-10 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black bg-gray-900 dark:bg-white bg-clip-text text-transparent drop-shadow-sm animate-gradient-x max-w-6xl mx-auto">
          Unlock the Value of Your Unused Software Licenses.
        </h1>

        <p className="mt-6 text-lg font-semibold text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
          SoftSell makes it easy to sell your unused or surplus software
          licenses for the best price, with zero hassle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-8 sm:gap-6 px-4">
          {homeBtn.map((btnText, idx) => (
            <button
              key={idx}
              className={`px-6 py-3 rounded-lg font-medium text-lg w-full sm:w-auto transition-all transform hover:scale-105 ${
                idx === 0
                  ? 'bg-green-500 text-white hover:shadow-lg'
                  : ' text-black hover:bg-gray-50 bg-white dark:hover:bg-gray-300 border-gray-300 border'
              }`}
            >
              {btnText}
            </button>
          ))}
        </div>

        <div className="my-32">
          <Working />
        </div>

        <div>
          <Features />
        </div>
        <div className="py-24">
          <Reviews />
        </div>
      </div>
      <div className="pb-12">
        <ContactForm />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default page;
