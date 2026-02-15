export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
  achievements: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "esl-teacher",
    role: "English as a Second Language Teacher",
    company: "Suppaphanya School",
    location: "Chiang Rai, Thailand",
    dates: "May 2024 - Aug 2024",
    responsibilities: [
      "Planned and delivered engaging English lessons tailored to students' varying proficiency levels and learning styles.",
      "Created lesson materials and assessments aligned with curriculum goals.",
      "Supported student progress through feedback, coaching, and individualized guidance.",
    ],
    achievements: [
      "Improved classroom engagement through interactive activities and group work.",
      "Maintained consistent student participation and attendance across the term.",
      "Collaborated with local staff to adapt lessons to classroom needs.",
    ],
  },
];
