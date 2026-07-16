export type Project = {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  contribution: string;
  challenges?: string;
  impact?: string;
  technologies: string[];
  image?: string;
  images: string[];
  videos: string[];
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  skills: string[];
};

export type PortfolioContent = {
  cvPath: string;
  cvUpdatedAt?: string;
  projects: Project[];
  skillCategories: SkillCategory[];
};

export type ProjectInput = Omit<Project, "id"> & { id?: string };

export type SkillCategoryInput = Omit<SkillCategory, "id"> & { id?: string };
