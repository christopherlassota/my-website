export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "instock",
    title: "InStock",
    description:
      "Inventory management app focused on clean CRUD flows and clear information hierarchy.",
    tags: ["React", "TypeScript", "Sass"],
    image: "/images/InStock.png",
    featured: true,
  },
  {
    id: "bandsite",
    title: "Bandsite",
    description:
      "Responsive marketing site built to practice layout systems and content hierarchy.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "/images/Bandsite.png",
    featured: true,
  },
  {
    id: "coffeeshop",
    title: "Coffee Shop",
    description:
      "Single-page landing experience emphasizing visual rhythm and typography.",
    tags: ["HTML", "CSS"],
    image: "/images/CoffeeShop.png",
    featured: false,
  },
];
