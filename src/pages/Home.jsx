import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Hero from "./Hero";
import Stack from "./Stack";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const EASE = [0.16, 1, 0.3, 1];

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main id="top">
      <Hero />

      <section id="stack">
        <Stack />
      </section>

      <Work />

      <section id="about">
        <About />
      </section>

      <Contact />

      <AnimatePresence>
        {showButton && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45, ease: EASE }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-7 right-5 z-40 flex h-12 w-12 items-center justify-center bg-ink text-paper transition-colors duration-300 hover:bg-accent sm:right-8"
            aria-label="Back to top"
          >
            <ArrowUp size={18} strokeWidth={1.75} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;
