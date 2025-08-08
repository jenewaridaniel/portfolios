import React from "react";
import node from '../assets/node.png'

const Stack = () => {
  const stackItems = [
    {
      name: "HTML",
      icon: 'https://cdn.creazilla.com/icons/3195437/html-icon-sm.png',
    },
    {
      name: "CSS",
      icon: "https://cdn.worldvectorlogo.com/logos/css-4.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.creazilla.com/icons/3204989/logo-javascript-icon-lg.png",
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/?size=512&id=cHBUT9SmrD2V&format=png",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://images.icon-icons.com/3398/PNG/512/css_tailwind_logo_icon_214735.png",
    },
    {
      name: "Node.js",
      icon: node,
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Canva",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
    },
    {
      name: "Framer Motion",
      icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vector-icons/brand-framer-motion-pk1mas1m7u9hi06fqzq77f.png/brand-framer-motion-nuunolaqtcs7zlblwkjs.png?_a=DATAg1AAZAA0",
    },
    { name: "Clerk", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/clerk-uvna1mxd54k50cohb8o2i.png/clerk-nzr7956knokwjx841f6yye.png?_a=DATAg1AAZAA0" },
  ];

  return (
    <div className="bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-50">
            My <span className="font-semibold">Stack</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gray-900 rounded-lg p-3 mb-2">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain filter grayscale contrast-200 brightness-0 invert"
                />
              </div>
              <span className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
