import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { websites } from "../data/projects";
import { EASE, useReveal } from "../lib/motion";

const featured = websites.filter((site) => site.featured);
const earlier = websites.filter((site) => !site.featured);

const pad = (n) => String(n).padStart(2, "0");
const hostname = (url) => new URL(url).hostname.replace(/^www\./, "");

const meta = (project) =>
  [project.kind, project.year].filter(Boolean).join("  ·  ");

/* ------------------------------------------------------------------------ */
/* Featured showcase                                                         */
/* ------------------------------------------------------------------------ */

const BrowserFrame = ({ project }) => {
  const reduced = useReducedMotion();

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      className="group block border border-paper-3 bg-paper-2"
    >
      {/* The address bar carries the real domain: proof, not decoration. */}
      <div className="flex items-center justify-between gap-4 border-b border-paper-3 px-4 py-2.5">
        <span className="min-w-0 truncate text-xs text-muted">
          {hostname(project.url)}
        </span>
        <span className="eyebrow flex shrink-0 items-center gap-2 text-accent-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Live
        </span>
      </div>

      <div className="overflow-hidden">
        <motion.div
          initial={reduced ? false : { scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
          />
        </motion.div>
      </div>
    </a>
  );
};

const Details = ({ project, number }) => (
  <div className="min-w-0">
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      {number && <span className="eyebrow text-accent">{number}</span>}
      <span className="eyebrow text-muted">{meta(project)}</span>
    </div>

    <h3 className="font-display mt-4 text-title font-medium text-ink">
      {project.name}
    </h3>

    <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted">
      {project.description}
    </p>

    {project.result && (
      <p className="font-display mt-6 max-w-[24ch] text-[clamp(1.25rem,1.8vw,1.6rem)] font-medium leading-[1.15] tracking-[-0.012em] text-accent">
        {project.result}
      </p>
    )}

    {project.tech && (
      <p className="mt-6 text-xs text-muted">{project.tech.join("  ·  ")}</p>
    )}

    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-8 inline-flex max-w-full items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-accent"
    >
      Visit site
      <span className="sr-only">: {project.name} (opens in a new tab)</span>
      <ArrowUpRight
        size={16}
        strokeWidth={2}
        className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  </div>
);

const Showcase = () => {
  const reveal = useReveal();
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);

  // Whichever screenshot crosses the middle of the viewport is "current".
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (index) =>
    itemRefs.current[index]?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "center",
    });

  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
      {/* Sticky rail: index plus the current project's details. Desktop only;
          on small screens each project carries its own details inline. */}
      <aside className="hidden lg:col-span-4 lg:block">
        <div className="sticky top-28">
          <ol className="border-t border-paper-3">
            {featured.map((project, index) => (
              <li key={project.url} className="border-b border-paper-3">
                <button
                  type="button"
                  onClick={() => jumpTo(index)}
                  aria-current={active === index ? "true" : undefined}
                  className="group flex w-full items-baseline gap-4 py-3 text-left"
                >
                  <span
                    className={`eyebrow transition-colors duration-500 ${
                      active === index ? "text-accent" : "text-muted"
                    }`}
                  >
                    {pad(index + 1)}
                  </span>
                  <span
                    className={`text-sm transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active === index
                        ? "translate-x-1 font-medium text-ink"
                        : "text-muted group-hover:text-ink"
                    }`}
                  >
                    {project.name}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="mt-10" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <Details project={featured[active]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </aside>

      <div className="space-y-20 lg:col-span-8 lg:space-y-36">
        {featured.map((project, index) => (
          <motion.article
            key={project.url}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            {...reveal(0, 40)}
          >
            <BrowserFrame project={project} />
            <div className="mt-8 lg:hidden">
              <Details project={project} number={pad(index + 1)} />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------------ */
/* Earlier sites: compact index with a cursor-tracked preview                */
/* ------------------------------------------------------------------------ */

const EarlierList = () => {
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
    <>
      <motion.p {...reveal()} className="eyebrow pb-4 text-muted">
        Earlier sites
      </motion.p>

      <div
        ref={listRef}
        onMouseMove={handleMove}
        onMouseLeave={() => setActive(null)}
        className="relative"
      >
        <ul>
          {earlier.map((project, index) => (
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
                className="group grid min-w-0 grid-cols-1 gap-x-8 gap-y-4 py-6 lg:grid-cols-12 lg:items-center lg:py-7"
              >
                <span className="eyebrow text-accent lg:col-span-1">
                  {pad(featured.length + index + 1)}
                </span>

                <h3 className="font-display min-w-0 text-[clamp(1.35rem,2.2vw,1.9rem)] font-medium leading-[1.1] tracking-[-0.018em] text-ink transition-[color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:col-span-4 lg:group-hover:translate-x-3 lg:group-hover:text-accent">
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

                <div className="lg:col-span-4">
                  <p className="text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  {project.result && (
                    <p className="mt-2 text-sm font-medium leading-snug text-accent-dim">
                      {project.result}
                    </p>
                  )}
                </div>

                <p className="text-xs text-muted lg:col-span-2">
                  {project.tech?.join("  ·  ")}
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
              key={earlier[active].url}
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
                  src={earlier[active].image}
                  alt=""
                  className="h-[15rem] w-[24rem] border border-paper-3 object-cover object-top shadow-2xl"
                />
                <span className="eyebrow mt-3 block w-fit bg-ink px-3 py-1.5 text-paper">
                  {earlier[active].kind}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

/* ------------------------------------------------------------------------ */

const Work = () => {
  const reveal = useReveal();

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
            Websites and mobile apps for real businesses, designed and built
            end to end. Every site here is still online.
          </p>
        </motion.div>

        <div className="mt-14 flex items-baseline justify-between gap-6 pb-4 lg:mt-20 lg:pb-6">
          <span className="eyebrow text-muted">
            Selected websites &middot; {pad(featured.length)}
          </span>
        </div>

        <Showcase />

        {earlier.length > 0 && (
          <div className="mt-28 lg:mt-44">
            <EarlierList />
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
