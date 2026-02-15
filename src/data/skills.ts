export type SkillGroup = {
  id: string;
  title: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: ["React", "TypeScript", "Sass", "HTML", "CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express", "SQL", "REST APIs"],
  },
  {
    id: "tooling",
    title: "Tooling",
    skills: ["Git", "Vite", "ESLint", "Figma"],
  },
];
