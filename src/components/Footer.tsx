import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pink-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-4">SoftSell</h3>
            <p className="mb-4">
              Transforming businesses with innovative software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              {['Home', 'About Us', 'Products', 'Pricing', 'Blog'].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-4">Support</h3>
            <ul>
              {['FAQ', 'Documentation', 'Contact Support', 'Knowledge Base', 'Community'].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

     
          <div>
            <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-3 flex items-start text-gray-600 dark:text-gray-400">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Software Lane, Tech City, TC 12345</span>
              </li>
              <li className="mb-3 flex items-center text-gray-600 dark:text-gray-400">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="mb-3 flex items-center text-gray-600 dark:text-gray-400">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@softcell.com</span>
              </li>
            </ul>
          </div>
        </div>

 
        <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} SoftSell. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mr-4">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
