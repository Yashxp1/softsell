import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'TechFusion Inc.',
    quote:
      'After our company switched to cloud solutions, we had dozens of unused licenses sitting around. SoftSell made the process of selling them incredibly simple and we received better value than expected. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'CFO',
    company: 'Innovate Solutions',
    quote:
      "As we downsized our on-premise infrastructure, SoftSell helped us recover a significant portion of our software investment. The valuation was fair and the payment was processed quickly. I'll definitely use their service again.",
    stars: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Operations Manager',
    company: 'Global Systems Ltd.',
    quote:
      'Working with SoftSell was refreshingly straightforward. Their team guided us through the entire process and we ended up with a much better return than we anticipated for our legacy licenses.',
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-16 dark:bg-white/10 bg-white/40 backdrop-blur-lg border dark:border-white/20 border-white/50 rounded-lg ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
          Don't just take our word for it — hear from the businesses that have
          successfully sold their unused software licenses through SoftSell.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 relative">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="italic text-gray-600 dark:text-gray-300 mb-6">
                  "{testimonial.quote}"
                </p>

                <div className="mt-auto">
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
