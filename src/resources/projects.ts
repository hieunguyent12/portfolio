export type ProjectType = {
  name: string;
  description: string;
  githubURL: string;
  demoVideo: string;
  technologies: string[];
  imagePath: string;
  link: string;
};

// TODO: Add links for projects
export const projects: ProjectType[] = [
  {
    name: "Simple Forms",
    description: "This is a description",
    githubURL: "https://github.com/hieunguyent12/simple-forms",
    demoVideo: "",
    technologies: ["React", "Firebase", "Tailwind"],
    imagePath: "/images/simple-forms.png",
    link: "",
  },
  {
    name: "AP Study Hall",
    description: "This is a description",
    githubURL: "https://github.com/hieunguyent12/simple-forms",
    demoVideo: "",
    technologies: ["React", "Firebase", "Tailwind"],
    imagePath: "/images/ap-study-hall.png",
    link: "",
  },
  {
    name: "Test Project",
    description: "This is a description",
    githubURL: "https://github.com/hieunguyent12/simple-forms",
    demoVideo: "",
    technologies: ["React", "Firebase", "Tailwind"],
    imagePath: "",
    link: "",
  },
];
