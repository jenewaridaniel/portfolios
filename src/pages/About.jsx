import React from "react";
import { motion } from "framer-motion";
import portrait from "../img/loking.png";

import { useReveal } from "../lib/motion";

const About = () => {
  const reveal = useReveal();

  return (
  <section className="bg-paper-2 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="mx-auto grid max-w-[92rem] items-center gap-12 lg:grid-cols-12 lg:gap-20">
      <motion.div
        {...reveal()}
        className="relative min-w-0 lg:col-span-5"
      >
        {/* Flat offset block, replacing the old indigo-to-purple gradient. */}
        <div
          aria-hidden="true"
          className="absolute -left-4 -top-4 h-full w-full bg-accent-wash"
        />
        <img
          src={portrait}
          alt="Illustration of Daniel looking up from his work"
          loading="lazy"
          decoding="async"
          className="relative w-full max-w-lg"
        />
      </motion.div>

      <motion.div
        {...reveal(0.1)}
        className="min-w-0 lg:col-span-7"
      >
        <h2 className="font-display max-w-[13ch] text-display font-semibold text-ink">
          A bit about <span className="text-accent">me</span>
        </h2>

        <div className="mt-8 max-w-[60ch] space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I&apos;m a final-year Entrepreneurship &amp; Innovation Technology
            student at FUTO, and I&apos;ve been building for the web for eight
            years, most of that for small businesses who needed a site that
            worked on a cheap phone over a slow connection.
          </p>
          <p>
            That constraint shaped how I work. I care about what loads fast,
            reads clearly, and gets someone from landing to checkout without
            them thinking about the interface at all.
          </p>
          <p>
            Lately I&apos;ve been taking the same approach into native apps with
            Swift and Kotlin, so a client doesn&apos;t have to hand the mobile
            half of their product to somebody else.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center bg-ink px-7 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-accent"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default About;
