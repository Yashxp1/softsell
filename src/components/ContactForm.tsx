"use client"

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.license) newErrors.license = "Please select a license type";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log("Form submitted:", formData);
      
      setErrors({});
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        license: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" flex items-center w-full justify-center">
      <div className="w-full md:w-[70%]">
        <form
          onSubmit={handleSubmit}
          className="dark:bg-white/10 bg-white/40 backdrop-blur-lg border dark:border-white/20 border-white/50 rounded-lg  shadow-xl  p-4 md:p-8 space-y-4 md:space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center dark:text-white mb-4">Contact Us</h2>

          {submitted && (
            <div className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 text-green-700 dark:text-green-200 p-4 mb-4 rounded">
              <p className="text-center">Thanks! We'll be in touch soon.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 dark:text-white">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-white/10 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-white">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-white/10 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1 dark:text-white">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-white/10 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.company}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.company && (
              <p className="text-red-500 text-xs mt-1">{errors.company}</p>
            )}
          </div>

          <div>
            <label htmlFor="license" className="block text-sm font-medium mb-1 dark:text-white">
              License Type
            </label>
            <select
              id="license"
              name="license"
              className="w-full p-2 rounded border border-gray-300  dark:border-gray-600 dark:bg-white/10 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.license}
              onChange={handleChange}
              disabled={isSubmitting}
            >
              <option className="text-black" value="">Select License</option>
              <option className="text-black" value="Free">Free</option>
              <option className="text-black" value="Pro">Pro</option>
              <option className="text-black" value="Enterprise">Enterprise</option>
            </select>
            {errors.license && (
              <p className="text-red-500 text-xs mt-1">{errors.license}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-white/10 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;