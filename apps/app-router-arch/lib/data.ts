export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  category: string;
};

export const projects: Project[] = [
  {
    id: "brutalist-hub",
    title: "Brutalist Hub",
    description: "A digital archive of brutalist architecture.",
    longDescription:
      "Brutalist Hub is a comprehensive digital platform dedicated to the study and appreciation of brutalist architecture. It features an extensive library of buildings, architect profiles, and historical essays that explore the movement's core tenets of raw concrete, geometric forms, and uncompromising functionality.",
    imageUrl: "https://placehold.co/600x400/27272a/fafaf9?text=Project+1",
    category: "Web Design",
  },
  {
    id: "swiss-type",
    title: "Swiss Type",
    description: "An interactive tool for exploring Swiss typography.",
    longDescription:
      "Swiss Type is an educational web application that allows designers to explore the principles of the International Typographic Style. Users can experiment with classic typefaces like Helvetica and Univers, manipulate grid systems, and learn about the historical context that shaped this influential design philosophy.",
    imageUrl: "https://placehold.co/600x400/27272a/fafaf9?text=Project+2",
    category: "Interactive Design",
  },
  {
    id: "minimalist-interiors",
    title: "Minimalist Interiors",
    description: "A gallery of minimalist interior design projects.",
    longDescription:
      "This project is a curated online gallery showcasing the beauty of minimalist interior design. It emphasizes clean lines, uncluttered spaces, and a neutral color palette. Each entry includes high-resolution photography and notes on the materials and design choices that contribute to a sense of calm and order.",
    imageUrl: "https://placehold.co/600x400/27272a/fafaf9?text=Project+3",
    category: "Curation",
  },
];
