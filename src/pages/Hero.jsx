import React from "react";
import icon from "../assets/icon.png";
import { motion } from "framer-motion";
import Stack from "./Stack";

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  const brushStrokeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 0.3, 0.4, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-gray-50/60 pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Paint brush stroke backgrounds with animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          variants={brushStrokeVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 w-full h-[200px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIyMDAiIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBkPSJNMTIwMCAyMGMtMTUwIDAtMzAwIDAtNDUwIDBzLTMwMCAwLTQ1MCAwLTMwMCAwLTQ1MCAwLTMwMCAwLTQ1MCAwUzAgMjAgMCAyMHYxMDBoMTIwMHoiIGZpbGw9IiNlZGVkZmYiIGZpbGwtb3BhY2l0eT0iMC43Ii8+PC9zdmc+')] bg-no-repeat bg-cover"
        ></motion.div>

        <motion.div
          variants={brushStrokeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="absolute top-1/3 -right-40 w-[600px] h-[300px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYwMCAzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTUwQzEwMCAxNTAgMjAwIDEwMCAzMDAgMTUwczIwMCAxMDAgMzAwIDUwIiBzdHJva2U9IiNlMGU1ZmYiIHN0cm9rZS13aWR0aD0iODAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] bg-no-repeat bg-contain mix-blend-overlay"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Content - comes first on mobile */}
          <motion.div variants={itemVariants} className="flex-1">
            <motion.h1
              className="text-4xl sm:text-5xl font-light leading-tight "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              Hello, I'm{" "}
              <motion.span
                className="font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Daniel
              </motion.span>
              <br />
              <motion.span
                className="text-gray-950 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Web Developer
              </motion.span>
            </motion.h1>

            <motion.a
              href="#work"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#1a1a1a",
                boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-block border-2 border-gray-800 text-gray-800 font-medium py-2.5 my-3 px-6 rounded-sm transition-all duration-200 hover:bg-gray-800 hover:text-white"
            >
              View my work →
            </motion.a>
          </motion.div>

          {/* Image - comes second on mobile */}
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="flex-1"
          >
            <motion.img
              src={icon}
              className="md:w-[790px] w-full h-auto rounded-sm"
              alt="Daniel's profile"
              initial={{ opacity: 0, rotate: -2 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring" }}
            />
          </motion.div>
        </motion.div>
      </div>
     
    </section>
  );
};

export default Hero;
