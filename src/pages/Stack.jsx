import React from "react";
import { motion } from "framer-motion";

import { useReveal } from "../lib/motion";

const devicon = (p) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${p}.svg`;
const simpleicon = (n) => `https://cdn.jsdelivr.net/npm/simple-icons@13/icons/${n}.svg`;

const groups = [
  {
    id: "01",
    label: "Interface",
    note: "The part people touch.",
    items: [
      { name: "React", icon: devicon("react/react-original") },
      { name: "TypeScript", icon: devicon("typescript/typescript-original") },
      { name: "JavaScript", icon: devicon("javascript/javascript-original") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss/tailwindcss-original") },
      { name: "Framer Motion", icon: devicon("framermotion/framermotion-original") },
      { name: "HTML", icon: devicon("html5/html5-original") },
      { name: "CSS", icon: devicon("css3/css3-original") },
    ],
  },
  {
    id: "02",
    label: "Mobile & app",
    note: "Native and cross-platform.",
    items: [
      { name: "Swift", icon: devicon("swift/swift-original") },
      { name: "Kotlin", icon: devicon("kotlin/kotlin-original") },
      { name: "React Native", icon: devicon("react/react-original") },
    ],
  },
  {
    id: "03",
    label: "Backend & data",
    note: "Where the state lives.",
    items: [
      { name: "Node.js", icon: devicon("nodejs/nodejs-original") },
      { name: "Express", icon: devicon("express/express-original"), mono: true },
      { name: "MongoDB", icon: devicon("mongodb/mongodb-original") },
      { name: "Firebase", icon: devicon("firebase/firebase-plain") },
      { name: "Supabase", icon: devicon("supabase/supabase-original") },
    ],
  },
  {
    id: "04",
    label: "Tooling",
    note: "Everything around the build.",
    items: [
      { name: "Git", icon: devicon("git/git-original") },
      { name: "Clerk", icon: simpleicon("clerk"), mono: true },
      { name: "Canva", icon: devicon("canva/canva-original") },
    ],
  },
];

const Stack = () => {
  const reveal = useReveal();

  return (
  <div className="bg-ink px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
    <div className="mx-auto max-w-[92rem]">
      <motion.h2
        {...reveal()}
        className="font-display max-w-[14ch] text-display font-semibold text-paper"
      >
        What I build <span className="text-accent">with</span>
      </motion.h2>

      <div className="mt-16 lg:mt-24">
        {groups.map((group, gi) => (
          <motion.section
            key={group.id}
            {...reveal(gi * 0.06)}
            className="grid gap-y-6 border-t border-ink-3 py-9 lg:grid-cols-12 lg:gap-x-10 lg:py-12"
          >
            <header className="min-w-0 lg:col-span-4">
              <div className="flex items-baseline gap-4">
                <span className="eyebrow text-accent">{group.id}</span>
                <h3 className="font-display text-title font-medium text-paper">
                  {group.label}
                </h3>
              </div>
              <p className="mt-2 pl-[3.1rem] text-sm text-muted-dk">{group.note}</p>
            </header>

            <ul className="flex min-w-0 flex-wrap gap-2.5 lg:col-span-8 lg:justify-end">
              {group.items.map((item) => (
                <li key={`${group.id}-${item.name}`}>
                  <span className="group flex items-center gap-3 bg-ink-2 py-3 pl-3 pr-5 transition-colors duration-300 hover:bg-ink-3">
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      /* Brand colour by default. Marks that are black on
                         transparent are inverted to white, or they disappear
                         into the dark ground entirely. */
                      className={`h-6 w-6 shrink-0 object-contain ${
                        item.mono ? "brightness-0 invert" : ""
                      }`}
                    />
                    <span className="whitespace-nowrap text-sm text-paper">
                      {item.name}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
        <div className="border-t border-ink-3" />
      </div>
    </div>
  </div>
  );
};

export default Stack;
