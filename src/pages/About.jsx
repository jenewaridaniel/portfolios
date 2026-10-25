import React from "react";
import { motion } from "framer-motion";

import { useReveal } from "../lib/motion";

/* The questions a recruiter asks first, answered before they have to. */
const facts = [
  { term: "Based in", detail: "Port Harcourt, Nigeria" },
  {
    term: "Studying",
    detail: "Final year, Entrepreneurship & Innovation Technology, FUTO",
  },
  { term: "Works in", detail: "React, React Native, TypeScript, Firebase" },
  { term: "Open to", detail: "Full-time roles and freelance projects" },
];

const About = () => {
  const reveal = useReveal();

  return (
  <section className="bg-paper-2 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-12 lg:gap-20">
      <motion.div {...reveal()} className="min-w-0 lg:col-span-7">
        <h2 className="font-display max-w-[13ch] text-display font-semibold text-ink">
          A bit about <span className="text-accent">me</span>
        </h2>

        <div className="mt-8 max-w-[60ch] space-y-5 text-base leading-relaxed text-ink-3 sm:text-lg">
          <p>
            I&apos;ve been building for the web since 2018, most of that for
            small businesses who needed a site that worked on a cheap phone over
            a slow connection.
          </p>
          <p>
            That constraint shaped how I work. I care about what loads fast,
            reads clearly, and gets someone from landing to checkout without
            them thinking about the interface at all.
          </p>
          <p>
            Lately I&apos;ve taken the same approach into mobile, with React
            Native and Expo, plus Swift and Kotlin, so a client doesn&apos;t
            have to hand the mobile half of their product to somebody else.
          </p>
        </div>
      </motion.div>

      <motion.div
        {...reveal(0.1)}
        className="min-w-0 lg:col-span-5 lg:self-end"
      >
        <dl className="border-t border-paper-3">
          {facts.map((fact) => (
            <div
              key={fact.term}
              className="grid gap-1 border-b border-paper-3 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6"
            >
              <dt className="text-sm text-muted">{fact.term}</dt>
              <dd className="text-base text-ink">{fact.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="#contact"
            className="inline-flex items-center bg-ink px-7 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-accent"
          >
            Get in touch
          </a>
          <a
            href="https://github.com/jenewaridaniel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink underline decoration-paper-3 underline-offset-[6px] transition-colors duration-300 hover:decoration-accent"
          >
            Code on GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default About;
