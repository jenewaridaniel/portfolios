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
      name: "Gabby's Boutique Hotel and Lounge ",
      url: "https://gabbyshotels.netlify.app",
      tech: ["Typescript", "Tailwind css","Firebase"],
      image: gab,
      description: "a Hotel website with booking and reservation features",
    },
    {
      id: 3,
      name: "MorningBrew",
      url: "https://morningbrewng.netlify.app/",
      tech: ["React","Tailwind css","Framer Motion"],
      image: brew,
      description: "a Website for a coffee shop with menu and contact features",
    },
    {
      id: 4,
      name: "Wheelzy",
      url: "https://wheelzy.netlify.app/",
      tech: ["React","Tailwind css","Framer Motion"],
      image: car,
      description: "a Car rental website with booking and contact features",
    },
    {
      id: 5,
      name: "Whispy",
      url: "https://whispy.netlify.app/",
      tech: ["React","Tailwind css","Firebase","Framer Motion"],
      image: whispy,
      description: "a media platform for sharing thoughts and ideas with real-time chat features Anonymous",
    },
    {
      id: 4,
      name: "Lisa Daniel's Collections Nigeria",
      url: "https://lisadanielsng.netlify.app/",
      tech: ["React","Tailwind css","Framer Motion","Firebase"],
      image: lisa,
      description: "a Fashion e-commerce website with product showcase and contact features",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50" id="work">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-2">
            My <span className="font-semibold">Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-indigo-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Key projects I've contributed and built
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="block group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative">
                <div className="w-full bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/70 to-transparent">
                  <div>
                    <h3 className="text-white font-medium">{project.name}</h3>
                    <p className="text-white/80 text-sm mt-1 line-clamp-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-white/10 text-white text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
