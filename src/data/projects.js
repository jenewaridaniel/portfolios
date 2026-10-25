import winpredict from "../assets/work/winpredict.jpg";
import gabbys from "../assets/work/gabbysboutiquehotelsandlounge.jpg";
import oem from "../assets/work/oemstrat.jpg";
import lisaDaniels from "../assets/work/lisadaniels.jpg";
import weport from "../assets/work/appclone.jpg";
import lifeSim from "../assets/work/lifesim.jpg";
import haulOnboarding from "../assets/work/haul-onboarding.jpg";
import haulRole from "../assets/work/haul-role.jpg";
import haulSignup from "../assets/work/haul-signup.jpg";
import brew from "../assets/brew.png";
import car from "../assets/car.png";
import whispy from "../assets/whispy.png";

/**
 * Work. `featured` projects get the large showcase; the rest go in the
 * compact list underneath.
 *
 * `platform` picks the frame: "web" and "game" get a browser window, "app"
 * gets phone screens (pass `screens` instead of `image`).
 *
 * `url` is the live link, `repo` the public source. Either can be missing,
 * but not both. `status` replaces the "Live" badge when there is no `url`.
 *
 * `year`, `tech` and `result` are optional and hidden when null. `result` is
 * one real outcome for the client; leave it null rather than guess.
 */
export const projects = [
  {
    featured: true,
    platform: "web",
    name: "WinPredict",
    url: "https://winpredictafricatechnologies.com/",
    year: null,
    kind: "Marketplace",
    tech: ["React", "Vite", "Firebase", "Paystack"],
    image: winpredict,
    description:
      "A verified tipster marketplace. Booking codes stay locked until someone pays, and every result is settled into a public record.",
    result: null,
  },
  {
    featured: true,
    platform: "app",
    name: "Haul",
    repo: "https://github.com/jenewaridaniel/haul",
    status: "In development",
    year: "2026",
    kind: "iOS & Android app",
    tech: ["Expo", "React Native", "TypeScript", "Expo Router", "Reanimated"],
    screens: [
      { src: haulOnboarding, alt: "Haul onboarding: Move anything anywhere, over an illustrated globe" },
      { src: haulRole, alt: "Haul role picker: I drive, We ship, or I send" },
      { src: haulSignup, alt: "Haul sign-up form with Google sign-in" },
    ],
    description:
      "Send, track and manage deliveries from pickup to door. Drivers, businesses and one-off senders each get their own flow from the first screen.",
    result: null,
  },
  {
    featured: true,
    platform: "web",
    name: "Gabby's Boutique Hotel & Lounge",
    url: "https://gabbysboutiquehotel.ng/",
    year: null,
    kind: "Hospitality",
    tech: ["React", "Vite", "Firebase"],
    image: gabbys,
    description:
      "Rooms, dining and direct booking for a boutique hotel and lounge in Port Harcourt.",
    result: null,
  },
  {
    featured: true,
    platform: "game",
    name: "Tamuno Bay",
    repo: "https://github.com/jenewaridaniel/daniel-life-sim",
    year: "2026",
    kind: "3D browser game",
    tech: ["Three.js", "TypeScript", "React", "Vitest"],
    image: lifeSim,
    description:
      "A life simulation set in an original Nigerian coastal city. The city, interiors and textures are generated in code, and it plays on a phone as well as a desktop.",
    result: null,
  },
  {
    featured: true,
    platform: "web",
    name: "Lisa Daniels Collections",
    url: "https://lisadanielscollection.netlify.app/",
    year: null,
    kind: "E-commerce",
    tech: ["React", "Vite", "Firebase", "Paystack"],
    image: lisaDaniels,
    description:
      "Women's clothing, shoes and bags, with same-day delivery across Port Harcourt.",
    result: null,
  },
  {
    platform: "web",
    name: "OEM Strategic Services",
    url: "https://oemstrategicservices.com/",
    year: null,
    kind: "Engineering",
    tech: ["React", "Vite"],
    image: oem,
    description:
      "Services, trading and quote requests for an engineering consultancy.",
    result: null,
  },
  {
    platform: "web",
    name: "MorningBrew",
    url: "https://morningbrewng.netlify.app/",
    year: "2024",
    kind: "Hospitality",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: brew,
    description: "Menu and location site for a coffee shop.",
    result: null,
  },
  {
    platform: "web",
    name: "Wheelzy",
    url: "https://wheelzy.netlify.app/",
    year: "2024",
    kind: "Booking",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: car,
    description: "Car rental browsing and booking, end to end.",
    result: null,
  },
  {
    platform: "web",
    name: "Whispy",
    url: "https://whispy.netlify.app/",
    year: "2024",
    kind: "Social",
    tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
    image: whispy,
    description: "A place to post thoughts, with real-time chat.",
    result: null,
  },
  {
    platform: "web",
    name: "WePort",
    url: "https://weport.netlify.app/",
    year: null,
    kind: "Front-end study",
    tech: null,
    image: weport,
    description:
      "Apple's product site rebuilt from scratch, as a study in layout, type and motion.",
    result: null,
  },
];
