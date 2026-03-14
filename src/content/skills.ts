export type SkillItem = {
  name: string;
  level: number;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export const skills: SkillGroup[] = [
  {
    title: "Web Development",
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Vue.js", level: 75 },
      { name: "Git / GitHub", level: 84 },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Canva", level: 92 },
      { name: "Social Media Graphics", level: 89 },
      { name: "Branding", level: 82 },
      { name: "Marketing Visuals", level: 86 },
    ],
  },
  {
    title: "Digital Management",
    items: [
      { name: "Social Media Management", level: 84 },
      { name: "Content Planning", level: 81 },
      { name: "Business Support", level: 80 },
    ],
  },
];
