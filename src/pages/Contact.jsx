import React from "react";
import { motion } from "framer-motion";

import { useReveal } from "../lib/motion";

const EMAIL = "techtrekng@gmail.com";
const WHATSAPP = "https://wa.me/2348085997087";

const socials = [
  {
    name: "WhatsApp",
    url: WHATSAPP,
    path: "M435.689 74.468C387.754 26.471 324 .025 256.071 0 116.098 0 2.18 113.906 2.131 253.916c-.024 44.758 11.677 88.445 33.898 126.946L0 512.459l134.617-35.311c37.087 20.238 78.85 30.891 121.345 30.903h.109c139.949 0 253.88-113.917 253.928-253.928.024-67.855-26.361-131.645-74.31-179.643v-.012zm-179.618 390.7h-.085c-37.868-.011-75.016-10.192-107.428-29.417l-7.707-4.577-79.886 20.953 21.32-77.889-5.017-7.987c-21.125-33.605-32.29-72.447-32.266-112.322.049-116.366 94.729-211.046 211.155-211.046 56.373.025 109.364 22.003 149.214 61.903 39.853 39.888 61.781 92.927 61.757 149.313-.05 116.377-94.728 211.058-211.057 211.058v.011zm115.768-158.067c-6.344-3.178-37.537-18.52-43.358-20.639-5.82-2.119-10.044-3.177-14.27 3.178-4.225 6.357-16.388 20.651-20.09 24.875-3.702 4.238-7.403 4.762-13.747 1.583-6.343-3.178-26.787-9.874-51.029-31.487-18.86-16.827-31.597-37.598-35.297-43.955-3.702-6.355-.39-9.789 2.775-12.943 2.849-2.848 6.344-7.414 9.522-11.116s4.225-6.355 6.343-10.581c2.12-4.238 1.06-7.937-.522-11.117-1.584-3.177-14.271-34.409-19.568-47.108-5.151-12.37-10.385-10.69-14.269-10.897-3.703-.183-7.927-.219-12.164-.219s-11.105 1.582-16.925 7.939c-5.82 6.354-22.209 21.709-22.209 52.927 0 31.22 22.733 61.405 25.911 65.642 3.177 4.237 44.745 68.318 108.389 95.812 15.135 6.538 26.957 10.446 36.175 13.368 15.196 4.834 29.027 4.153 39.96 2.52 12.19-1.825 37.54-15.353 42.824-30.172 5.283-14.818 5.283-27.529 3.701-30.172-1.582-2.641-5.819-4.237-12.163-7.414l.011-.024z",
    viewBox: "0 0 510 512.459",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/techtreknigeria",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    viewBox: "0 0 24 24",
  },
  {
    name: "X",
    url: "https://twitter.com/techtrek_ng",
    path: "M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z",
    viewBox: "0 0 512 462.799",
  },
  {
    name: "GitHub",
    url: "https://github.com/jenewaridaniel",
    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    viewBox: "0 0 24 24",
  },
];

const Contact = () => {
  const reveal = useReveal();

  return (
  <section id="contact" className="bg-ink px-5 pt-24 sm:px-8 lg:px-12 lg:pt-32">
    <div className="mx-auto max-w-[92rem]">
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
        <motion.div {...reveal()} className="min-w-0 lg:col-span-7">
          <h2 className="font-display max-w-[12ch] text-display font-semibold text-paper">
            Let&apos;s build <span className="text-accent">yours</span>
          </h2>
        </motion.div>

        <motion.p
          {...reveal(0.1)}
          className="max-w-[46ch] self-end text-base leading-relaxed text-muted-dk sm:text-lg lg:col-span-5"
        >
          Have something in mind, or just want to talk it through first?
          WhatsApp is fastest, but email reaches me just as well.
        </motion.p>
      </div>

      <motion.div {...reveal(0.16)} className="mt-14 border-t border-ink-3 pt-10 lg:mt-20">
        <a
          href={`mailto:${EMAIL}`}
          className="font-display block break-words text-display font-semibold text-paper transition-colors duration-300 hover:text-accent"
        >
          {EMAIL}
        </a>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent px-7 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-accent-dim"
          >
            Message on WhatsApp
          </a>

          <ul className="flex items-center gap-1">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-12 w-12 items-center justify-center text-muted-dk transition-colors duration-300 hover:bg-ink-2 hover:text-paper"
                >
                  <svg
                    viewBox={social.viewBox}
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d={social.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-ink-3 py-8 text-xs text-muted-dk lg:mt-28">
        <span>Daniel Gilbert Jenewari &middot; Techtrek</span>
        <span>Port Harcourt, Nigeria &middot; {new Date().getFullYear()}</span>
      </footer>
    </div>
    </section>
  );
};

export default Contact;
