import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import cartoon from "../img/art.png";
import { useReveal } from "../lib/motion";

const Hero = () => {
  const reveal = useReveal();

  return (
  <section className="relative bg-paper overflow-hidden">
    {/* Accent field anchored to the illustration, bleeding off the right edge. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-[18%] hidden h-[62%] w-[38%] bg-accent-wash lg:block"
    />

    <div className="relative mx-auto max-w-[92rem] px-5 pt-14 sm:px-8 lg:px-12 lg:pt-24">
      <div className="grid items-end gap-y-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="min-w-0 lg:col-span-7 lg:pb-10">
          <motion.p {...reveal(0)} className="eyebrow text-accent-dim">
            Port Harcourt, Nigeria
          </motion.p>

          <motion.h1
            {...reveal(0.08, 34)}
            className="font-display mt-5 text-mega font-semibold text-ink"
          >
            Web &amp; app
            <br />
            <span className="text-accent">developer.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.16)}
            className="mt-8 max-w-[52ch] text-base leading-relaxed text-muted sm:text-lg"
          >
            I&apos;m Daniel Gilbert Jenewari. Eight years building interfaces
            people actually finish using, for hotels, boutiques, coffee shops
            and storefronts across Nigeria. Now on iOS and Android too.
          </motion.p>

          <motion.div {...reveal(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2.5 bg-ink px-7 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-accent"
            >
              See the work
              <ArrowDownRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-4 text-sm font-medium tracking-wide text-ink underline decoration-paper-3 decoration-1 underline-offset-[6px] transition-colors duration-300 hover:decoration-accent"
            >
              Start a project
            </a>
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.12)}
          className="relative min-w-0 lg:col-span-5 lg:-mr-12 xl:-mr-20"
        >
          <img
            src={cartoon}
            alt="Illustrated portrait of Daniel at his desk"
            className="w-full max-w-md object-contain lg:max-w-none"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>

      {/* Quiet fact line. Deliberately a sentence, not a stat grid. */}
      <motion.div
        {...reveal(0.32, 14)}
        className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-paper-3 py-6 text-xs text-muted lg:mt-10"
      >
        <span>Eight years shipping</span>
        <span aria-hidden="true" className="text-paper-3">/</span>
        <span>React, React&nbsp;Native, Swift, Kotlin</span>
        <span aria-hidden="true" className="text-paper-3">/</span>
        <span>Final year, Entrepreneurship &amp; Innovation Technology, FUTO</span>
        <span aria-hidden="true" className="text-paper-3">/</span>
        <span className="text-accent-dim">Open to new work</span>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;
