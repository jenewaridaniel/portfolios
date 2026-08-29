import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Stack", href: "#stack" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-paper transition-shadow duration-500 ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-paper-3)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[92rem] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-ink"
        >
          Techtrek
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="eyebrow group relative py-2 text-muted transition-colors duration-300 hover:text-ink"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-1/2 h-px w-0 bg-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:left-0 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/2348085997087"
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow bg-ink px-6 py-3.5 text-paper transition-colors duration-300 hover:bg-accent"
          >
            Say hello
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={isOpen}
          className="text-ink md:hidden"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-ink/50 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.55, ease: EASE }}
              className="fixed inset-y-0 right-0 z-50 flex w-[80%] max-w-xs flex-col bg-paper p-7 md:hidden"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="self-end text-ink"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <ul className="mt-12 flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.name} className="border-b border-paper-3">
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-display block py-5 text-2xl font-medium text-ink"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/2348085997087"
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow mt-auto bg-ink px-6 py-4 text-center text-paper"
              >
                Say hello
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
