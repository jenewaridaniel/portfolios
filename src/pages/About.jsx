import React from "react";
import me from "../assets/me.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
      {/* X and O background pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBvcGFjaXR5PSIwLjA1Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMjBsNjAgNjBNODAgMjBsLTYwIDYwIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image with subtle shadow and border */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative">
              <img
                src={me}
                className="w-full max-w-lg"
                alt="Daniel Gilbert Jenewari"
              />
              <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-lg opacity-70"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              About <span className="font-semibold">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                <span className="font-semibold">Daniel Gilbert Jenewari</span> is
                a final year Computer Science student at FUTO with 8 years of
                frontend development experience.
              </p>
              
              <p className="text-lg">
                Specializing in responsive, user-friendly interfaces, I bridge
                academic knowledge with professional expertise to deliver
                exceptional web solutions.
              </p>
              
              <p className="text-lg">
                My unique combination of technical education and extensive
                practical experience allows me to approach problems with both
                theoretical depth and real-world insight.
              </p>
              
              <div className="pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-md transition-all duration-200 shadow-lg"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;