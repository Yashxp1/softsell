import { CreditCard, DollarSign, Upload } from 'lucide-react';
import React from 'react';

const workingSteps = [
  {
    icon: <Upload size={40} />,
    title: 'Upload License',
    description:
      'Submit your license details through our secure portal. We handle all major software vendors.',
  },
  {
    icon: <DollarSign size={40} />,
    title: 'Get Valuation',
    description:
      'Our experts assess your license value based on market demand and provide you with the best possible quote.',
  },
  {
    icon: <CreditCard size={40} />,
    title: 'Get Paid',
    description:
      'Accept our offer and receive payment via your preferred method within 3-5 business days.',
  },
];

const Working = () => {
  return (
    <section id="how-it-works" className="py-16  dark:bg-white/10 bg-white/40 backdrop-blur-lg border dark:border-white/20 border-white/50 rounded-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 dark:text-white ">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workingSteps.map((step, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center bg-white/90 dark:bg-gray-800/80 p-8 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className={`p-5 rounded-full mb-6 ${
                idx === 0 
                  ? "bg-pink-100 dark:bg-pink-900/30 text-pink-500 dark:text-pink-300" 
                  : idx === 1 
                  ? "bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-300" 
                  : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-300"
              }`}>
                {React.cloneElement(step.icon, { 
                  className: `${step.icon.props.className || ''}`
                })}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Working;