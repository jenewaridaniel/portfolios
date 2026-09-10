import winpredict from "../assets/work/winpredict.jpg";
import gabbys from "../assets/work/gabbysboutiquehotelsandlounge.jpg";
import oem from "../assets/work/oemstrat.jpg";
import lisaDaniels from "../assets/work/lisadaniels.jpg";
import weport from "../assets/work/appclone.jpg";
import brew from "../assets/brew.png";
import car from "../assets/car.png";
import whispy from "../assets/whispy.png";

/**
 * Websites. `featured` sites get the large showcase; the rest go in the
 * compact "Earlier sites" list.
 *
 * `year`, `tech` and `result` are optional and hidden when null. `result` is
 * one real outcome for the client; leave it null rather than guess.
 */
export const websites = [
  {
    featured: true,
    name: "WinPredict",
    url: "https://winpredictafricatechnologies.com/",
    year: null,
    kind: "Marketplace",
    tech: null,
    image: winpredict,
    description:
      "A verified tipster marketplace. Booking codes stay locked until someone pays, and every result is settled into a public record.",
    result: null,
  },
  {
    featured: true,
    name: "Gabby's Boutique Hotel & Lounge",
    url: "https://gabbysboutiquehotel.ng/",
    year: null,
    kind: "Hospitality",
    tech: null,
    image: gabbys,
    description:
      "Rooms, dining and direct booking for a boutique hotel and lounge in Port Harcourt.",
    result: null,
  },
  {
    featured: true,
    name: "OEM Strategic Services",
    url: "https://oemstrategicservices.com/",
    year: null,
    kind: "Engineering",
    tech: null,
    image: oem,
    description:
      "Services, trading and quote requests for an engineering and industrial consultancy.",
    result: null,
  },
  {
    featured: true,
    name: "Lisa Daniels Collections",
    url: "https://lisadanielscollection.netlify.app/",
    year: null,
    kind: "E-commerce",
    tech: null,
    image: lisaDaniels,
    description:
      "Women's clothing, shoes and bags, with same-day delivery across Port Harcourt.",
    result: null,
  },
  {
    featured: true,
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
  {
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
    name: "Whispy",
    url: "https://whispy.netlify.app/",
    year: "2024",
    kind: "Social",
    tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
    image: whispy,
    description: "A place to post thoughts, with real-time chat.",
    result: null,
  },
];
