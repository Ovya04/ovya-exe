// src/data/coursework.ts
import type { Course } from "../types/content";

// Names follow the standard IIT Madras BS curriculum.
// Delete any course you didn't take, and edit freely.
export const courses: Course[] = [
  { id: "python", name: "Programming in Python", level: "Foundation" },
  { id: "dbms", name: "Database Management Systems", level: "Diploma · Programming" },
  {
    id: "mad1",
    name: "Modern Application Development I",
    level: "Diploma · Programming",
    projectIds: ["placement-portal"],
  },
  {
    id: "mad2",
    name: "Modern Application Development II",
    level: "Diploma · Programming",
    projectIds: ["trek-app"],
  },
  { id: "mlt", name: "Machine Learning Techniques", level: "Diploma · Data Science" },
  // CONFIRM: inferred from the repo names ("...-22f3001028" Kaggle project, "tds-databot")
  {
    id: "mlp",
    name: "Machine Learning Practice",
    level: "Diploma · Data Science",
    projectIds: ["kaggle-comment-category-prediction"],
  },
  {
    id: "tds",
    name: "Tools in Data Science",
    level: "Diploma · Data Science",
    projectIds: ["telegram-data-analysis-bot"],
  },
];