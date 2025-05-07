import React from 'react';
import { Shield, DollarSign, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: <DollarSign size={28} />,
    title: 'Best Value',
    description:
      'We offer competitive rates that beat direct vendor buybacks by an average of 15%.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Secure Process',
    description:
      'End-to-end encryption and compliance with all legal transfer requirements for your protection.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Fast Turnaround',
    description:
      'From submission to payment in as little as 3 business days. No long waiting periods.',
  },
  {
    icon: <Users size={28} />,
    title: 'Expert Support',
    description:
      'Our team of licensing specialists will guide you through every step of the process.',
  },
];

const Features = () => {
  return (
    <section id='learn-more' className="py-16 dark:bg-white/10 bg-white/40 backdrop-blur-lg border dark:border-white/20 border-white/50 rounded-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500 bg-clip-text text-transparent">
          Why Choose SoftSell
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
          We're revolutionizing how businesses recover value from their software
          investments. Here's what sets us apart:
        </p>

        <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/90 flex flex-col items-center justify-center dark:bg-gray-800/80 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1"
            >
              <div
                className={`
                w-14 h-14 mb-5  rounded-full flex items-center justify-center
                ${
                  idx === 0
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-300'
                    : idx === 1
                    ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-500 dark:text-pink-300'
                    : idx === 2
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-300'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-300'
                }
              `}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

  
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/70 dark:bg-gray-800/60 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500 bg-clip-text text-transparent">
              15%+
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Higher Returns
            </p>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/60 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 bg-clip-text text-transparent">
              3-5
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Business Days
            </p>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/60 rounded-xl p-6 text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-600 dark:from-indigo-400 dark:to-blue-500 bg-clip-text text-transparent">
              500+
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Satisfied Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
