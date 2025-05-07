import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'TechFusion Inc.',
    image: '/api/placeholder/100/100', // Use actual image path in production
    quote: 'After our company switched to cloud solutions, we had dozens of unused licenses sitting around. SoftSell made the process of selling them incredibly simple and we received better value than expected. Highly recommended!',
    stars: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'CFO',
    company: 'Innovate Solutions',
    image: '/api/placeholder/100/100', // Use actual image path in production
    quote: 'As we downsized our on-premise infrastructure, SoftSell helped us recover a significant portion of our software investment. The valuation was fair and the payment was processed quickly. I\'ll definitely use their service again.',
    stars: 5
  },
  {
    name: 'Emily Chen',
    role: 'Operations Manager',
    company: 'Global Systems Ltd.',
    image: '/api/placeholder/100/100', // Use actual image path in production
    quote: 'Working with SoftSell was refreshingly straightforward. Their team guided us through the entire process and we ended up with a much better return than we anticipated for our legacy licenses.',
    stars: 5
  }
];

const Reviews = () => {
  return (
    <section className="py-16 dark:bg-white/10 bg-white/40 backdrop-blur-lg border dark:border-white/20 border-white/50 rounded-lg ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
          Don't just take our word for it — hear from the businesses that have successfully sold their unused software licenses through SoftSell.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full">
              {/* Quote Icon */}
              <div className="absolute -left-2 -top-2">
                <div className={`
                  p-3 rounded-full
                  ${idx === 0 
                    ? "bg-pink-100 dark:bg-pink-900/30 text-pink-500 dark:text-pink-300" 
                    : idx === 1 
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-300"
                    : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-500 dark:text-indigo-300"
                  }
                `}>
                  <Quote size={24} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="italic text-gray-600 dark:text-gray-300 mb-6">
                  "{testimonial.quote}"
                </p>
                
                {/* Person */}
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Join Our Satisfied Customers
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;