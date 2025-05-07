import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-pink-100 dark:text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 dark:text-gray-900">SoftSell</h3>
            <p className="mb-4">Transforming businesses with innovative software solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 dark:text-gray-900">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">Products</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">Blog</a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 dark:text-gray-900">Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">Documentation</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">Contact Support</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">Knowledge Base</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-gray-900">Community</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 dark:text-gray-900">Contact Us</h3>
            <ul>
              <li className="mb-3 flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 dark:text-gray-700" />
                <span>123 Software Lane, Tech City, TC 12345</span>
              </li>
              <li className="mb-3 flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 dark:text-gray-700" />
                <span>(123) 456-7890</span>
              </li>
              <li className="mb-3 flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 dark:text-gray-700" />
                <span>info@softcell.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t dark:border-gray-800 border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} SoftSell. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="dark:text-gray-400 dark:hover:text-white text-gray-600 hover:text-gray-900 mr-4">Privacy Policy</a>
            <a href="#" className="dark:text-gray-400 dark:hover:text-white text-gray-600 hover:text-gray-900 mr-4">Terms of Service</a>
            <a href="#" className="dark:text-gray-400 dark:hover:text-white text-gray-600 hover:text-gray-900">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}