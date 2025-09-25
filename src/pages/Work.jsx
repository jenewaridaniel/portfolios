import React from "react";
import { motion } from "framer-motion";
import dest from "../assets/dest.png";
import gab from "../assets/gab.png";
import brew from "../assets/brew.png";
import car from "../assets/car.png";
import lisa from "../assets/lisa.png";
import whispy from "../assets/whispy.png";

const Work = () => {
  const projects = [
    {
      id: 1,
      name: "Dest Gadgets Edge",
      url: "https://destgadgetsedge.ng/",
      tech: ["React", "Firebase", "Tailwind"],
      image: dest,
      description: "E-commerce platform for tech gadgets with secure checkout",
    },
    {
      id: 2,
      name: "Gabby's Boutique Hotel and Lounge",
      url: "https://gabbyshotels.netlify.app",
      tech: ["Typescript", "Tailwind css", "Firebase"],
      image: gab,
      description: "Hotel website with booking and reservation features",
    },
    {
      id: 3,
      name: "MorningBrew",
      url: "https://morningbrewng.netlify.app/",
      tech: ["React", "Tailwind css", "Framer Motion"],
      image: brew,
      description: "Website for a coffee shop with menu and contact features",
    },
    {
      id: 4,
      name: "Wheelzy",
      url: "https://wheelzy.netlify.app/",
      tech: ["React", "Tailwind css", "Framer Motion"],
      image: car,
      description: "Car rental website with booking and contact features",
    },
    {
      id: 5,
      name: "Whispy",
      url: "https://whispy.netlify.app/",
      tech: ["React", "Tailwind css", "Firebase", "Framer Motion"],
      image: whispy,
      description:
        "Media platform for sharing thoughts with real-time chat features",
    },
    {
      id: 6,
      name: "Lisa Daniel's Collections Nigeria",
      url: "https://lisadanielsng.netlify.app/",
      tech: ["React", "Tailwind css", "Framer Motion", "Firebase"],
      image: lisa,
      description: "Fashion e-commerce website with product showcase features",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="work">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-3">
            My <span className="font-semibold">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key projects I've contributed to and built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 group-hover:border-gray-200">
                  <div className="aspect-video bg-gray-50 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-100 rounded-xl pointer-events-none transition-all duration-300"></div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
