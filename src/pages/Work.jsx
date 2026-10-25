import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../data/projects";
import { EASE, useReveal } from "../lib/motion";

const featured = projects.filter((project) => project.featured);
const earlier = projects.filter((project) => !project.featured);

const PLATFORM = { web: "Web", app: "App", game: "Game" };

const pad = (n) => String(n).padStart(2, "0");
const hostname = (url) => new URL(url).hostname.replace(/^www\./, "");

// Live site first; code-only projects point at their repository.
const linkOf = (project) => project.url ?? project.repo;
const addressOf = (project) =>
  project.url ? hostname(project.url) : project.repo.replace(/^https:\/\//, "");

const meta = (project) =>
  [project.kind, project.year, !project.url && project.status]
    .filter(Boolean)
    .join("  ·  ");

/* ------------------------------------------------------------------------ */
/* Featured showcase                                                         */
/* ------------------------------------------------------------------------ */

/* The address bar carries the real domain or repository: proof, not
   decoration. Only a live URL earns the accent dot. */
const FrameBar = ({ project }) => (
  <div className="flex items-center justify-between gap-4 border-b border-paper-3 px-4 py-2.5">
    <span className="min-w-0 truncate text-xs text-muted">
      {addressOf(project)}
    </span>
    {project.url ? (
      <span className="eyebrow flex shrink-0 items-center gap-2 text-accent-dim">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Live
      </span>
    ) : (
      <span className="eyebrow flex shrink-0 items-center gap-2 text-muted">
        <span className="h-1.5 w-1.5 rounded-full border border-muted" />
        {project.status ?? "Code"}
      </span>
    )}
  </div>
);

const FrameLink = ({ project, children }) => (
  <a
    href={linkOf(project)}
    target="_blank"
    rel="noopener noreferrer"
    tabIndex={-1}
    aria-hidden="true"
    className="group block border border-paper-3 bg-paper-2"
  >
    <FrameBar project={project} />
    {children}
  </a>
);

const BrowserFrame = ({ project }) => {
  const reduced = useReducedMotion();

  return (
    <FrameLink project={project}>
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
    </FrameLink>
  );
};

/* Same 16:10 footprint as a browser frame, so the column keeps its rhythm.
   Three phones rise out of the bottom edge; the middle one stands taller. */
const PhoneFrame = ({ project }) => {
  const reduced = useReducedMotion();

  return (
    <FrameLink project={project}>
      <div className="relative aspect-[16/10] overflow-hidden bg-accent-wash">
        <div className="absolute inset-x-0 top-[9%] flex items-start justify-center gap-[4.5%]">
          {project.screens.map((screen, index) => (
            <motion.div
              key={screen.src}
              initial={reduced ? false : { y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: EASE, delay: index * 0.1 }}
              className={`w-[27%] shrink-0 ${index === 1 ? "-mt-[2.5%]" : "mt-[3.5%]"}`}
            >
              <div
                style={{ transitionDelay: `${index * 60}ms` }}
                className="overflow-hidden rounded-[14%/6.5%] border-[3px] border-ink bg-ink shadow-[0_24px_48px_-24px_oklch(0.175_0.012_45/0.45)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 sm:border-[5px]"
              >
                <img
                  src={screen.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[390/844] w-full object-cover object-top"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FrameLink>
  );
};

const Frame = ({ project }) =>
  project.platform === "app" ? (
    <PhoneFrame project={project} />
  ) : (
    <BrowserFrame project={project} />
  );

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

    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
      <a
        href={linkOf(project)}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex max-w-full items-center gap-2.5 bg-ink px-6 py-3.5 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-accent"
      >
        {project.url ? "Visit site" : "Read the code"}
        <span className="sr-only">: {project.name} (opens in a new tab)</span>
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>

      {project.url && project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-ink underline decoration-paper-3 underline-offset-[6px] transition-colors duration-300 hover:decoration-accent"
        >
          Source<span className="sr-only">: {project.name} on GitHub</span>
        </a>
      )}
    </div>
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
              <li key={project.name} className="border-b border-paper-3">
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
                  <span className="ml-auto shrink-0 pl-3 text-xs text-muted">
                    {PLATFORM[project.platform]}
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
            key={project.name}
            ref={(el) => (itemRefs.current[index] = el)}
            data-index={index}
            {...reveal(0, 40)}
          >
            <Frame project={project} />
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
/* More websites: compact index with a cursor-tracked preview                */
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
        More websites
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
            Things I have <span className="text-accent">built</span>
          </h2>
          <p className="max-w-[36ch] text-sm leading-relaxed text-muted">
            Client websites, a mobile app and a 3D game, designed and built end
            to end. Every live link here still works, and the rest open their
            source.
          </p>
        </motion.div>

        <div className="mt-14 flex items-baseline justify-between gap-6 pb-4 lg:mt-20 lg:pb-6">
          <span className="eyebrow text-muted">
            Selected work &middot; {pad(featured.length)}
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
