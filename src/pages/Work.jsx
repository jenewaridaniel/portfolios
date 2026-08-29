import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import dest from "../assets/dest.png";
import gab from "../assets/gab.png";
import brew from "../assets/brew.png";
import car from "../assets/car.png";
import lisa from "../assets/lisa.png";
import whispy from "../assets/whispy.png";

import { EASE, useReveal } from "../lib/motion";

const projects = [
  {
    name: "Dest Gadgets Edge",
    url: "https://destgadgetsedge.ng/",
    year: "2025",
    kind: "E-commerce",
    tech: ["React", "Firebase", "Tailwind"],
    image: dest,
    description: "Storefront for tech gadgets, with secure checkout.",
  },
  {
    name: "Gabby's Boutique Hotel",
    url: "https://gabbyshotels.netlify.app",
    year: "2025",
    kind: "Hospitality",
    tech: ["TypeScript", "Tailwind", "Firebase"],
    image: gab,
    description: "Rooms, rates and reservations for a boutique hotel and lounge.",
  },
  {
    name: "MorningBrew",
    url: "https://morningbrewng.netlify.app/",
    year: "2024",
    kind: "Hospitality",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: brew,
    description: "Menu and location site for a coffee shop.",
  },
  {
    name: "Wheelzy",
    url: "https://wheelzy.netlify.app/",
    year: "2024",
    kind: "Booking",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: car,
    description: "Car rental browsing and booking, end to end.",
  },
  {
    name: "Whispy",
    url: "https://whispy.netlify.app/",
    year: "2024",
    kind: "Social",
    tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
    image: whispy,
    description: "A place to post thoughts, with real-time chat.",
  },
  {
    name: "Lisa Daniel's Collections",
    url: "https://lisadanielsng.netlify.app/",
    year: "2023",
    kind: "E-commerce",
    tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
    image: lisa,
    description: "Fashion storefront and product showcase.",
  },
];

const Work = () => {
  const reveal = useReveal();
  const [active, setActive] = useState(null);
  const listRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  // Overdamped: the preview trails the cursor without ever overshooting it.
  const x = useSpring(rawX, { stiffness: 220, damping: 40, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 220, damping: 40, mass: 0.6 });

  const handleMove = (event) => {
    const bounds = listRef.current?.getBoundingClientRect();
    if (!bounds) return;
    rawX.set(event.clientX - bounds.left);
    rawY.set(event.clientY - bounds.top);
  };

  return (
    <section id="work" className="bg-paper px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[92rem]">
        <motion.div
          {...reveal()}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <h2 className="font-display max-w-[16ch] text-display font-semibold text-ink">
            Things I have <span className="text-accent">shipped</span>
          </h2>
          <p className="max-w-[34ch] text-sm text-muted">
            Live sites, built and maintained for real businesses. Every one of
            them is still online.
          </p>
        </motion.div>

        <div
          ref={listRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setActive(null)}
          className="relative mt-14 lg:mt-20"
        >
          <ul>
            {projects.map((project, index) => (
              <motion.li
                key={project.url}
                {...reveal(index * 0.05, 22)}
                className="border-t border-paper-3 last:border-b"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActive(index)}
                  className="group grid min-w-0 grid-cols-1 gap-x-8 gap-y-5 py-7 transition-colors duration-500 lg:grid-cols-12 lg:items-center lg:py-9"
                >
                  <span className="eyebrow text-accent lg:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display min-w-0 text-title font-medium text-ink transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:col-span-5 lg:group-hover:translate-x-3 lg:group-hover:text-accent">
                    {project.name}
                  </h3>

                  {/* Inline preview for touch screens, where there is no cursor
                      to follow. */}
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full border border-paper-3 object-cover object-top lg:hidden"
                  />

                  <p className="text-sm leading-relaxed text-muted lg:col-span-3">
                    {project.description}
                  </p>

                  <p className="text-xs text-muted lg:col-span-2">
                    {project.tech.join("  ·  ")}
                  </p>

                  <span className="flex items-center gap-3 text-xs text-muted lg:col-span-1 lg:justify-end">
                    {project.year}
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.75}
                      className="text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Cursor-tracked preview. Pointer devices only. */}
          <AnimatePresence>
            {active !== null && (
              <motion.div
                key={projects[active].url}
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: EASE }}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
              >
                <div className="-translate-x-1/2 -translate-y-1/2">
                  <img
                    src={projects[active].image}
                    alt=""
                    className="h-[15rem] w-[24rem] border border-paper-3 object-cover object-top shadow-2xl"
                  />
                  <span className="eyebrow mt-3 block bg-ink px-3 py-1.5 text-paper w-fit">
                    {projects[active].kind}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Work;
