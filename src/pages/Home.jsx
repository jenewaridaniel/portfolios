import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Stack from "./Stack";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";


const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <section>
        <Hero />
      </section>

      <section id="stack">
        <Stack />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="works">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Back to Top Button */}
      {showButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 border border-gray-400 bg-gray-50 text-gray-950 rounded-full shadow-lg  transition-colors duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
};

export default Home;
