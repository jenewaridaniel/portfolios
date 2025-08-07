import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Twitter } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Works", href: "#works" },
    { name: "My Stack", href: "#stack" },
    { name: "About me", href: "#about" },
    { name: "Contact me", href: "#contact" },
  ];

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <nav className="bg-white p-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold text-gray-900">Techtrek</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-700 px-3 py-2 text-xs font-light uppercase tracking-widest group"
                >
                  {link.name}
                  {/* Animated underline */}
                  <span className="absolute left-1/2 bottom-0 w-0 h-px bg-gray-950 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4 ml-6">
              <a
                href="https://github.com/jenewaridaniel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://wa.me/+2348085997087">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-950 text-white px-6 py-3 rounded-md text-sm font-medium uppercase tracking-wider  transition-colors duration-200"
                >
                  Contact me
                </motion.button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ type: "tween", ease: "easeInOut" }}
            className="md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-indigo-600"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-700 px-3 py-2 text-sm font-light uppercase tracking-wide  transition-colors duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="https://wa.me/+2348085997087">        
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-950 text-white px-10 py-3 rounded-md text-xs font-light uppercase tracking-wide hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Contact me
                  </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={toggleMobileMenu}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
