export type Project = {
  name: string;
  description: string;
  tools: string;
};

export const projects: Project[] = [
  {
    name: "Restaurant Website",
    description:
      "Responsive restaurant website with modern menu browsing and contact flow.",
    tools: "HTML, CSS, JavaScript",
  },
  {
    name: "Business Landing Page",
    description:
      "High-conversion landing page for a local business with clear service positioning.",
    tools: "Next.js, Tailwind CSS",
  },
  {
    name: "Social Media Design Pack",
    description:
      "A reusable collection of promotional templates for consistent social branding.",
    tools: "Canva, Brand Guidelines",
  },
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio focused on web, design, and digital business services.",
    tools: "Next.js, TypeScript",
  },
  {
    name: "Canva Poster Collection",
    description:
      "Event and campaign posters designed to improve reach and communication.",
    tools: "Canva, Visual Strategy",
  },
  {
    name: "Facebook Page Management Sample",
    description:
      "Content planning and post optimization sample for local audience growth.",
    tools: "Meta Tools, Content Calendar",
  },
];
