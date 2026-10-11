// src/data/about.ts
export type InterestIcon = "music" | "writing" | "editorial" | "events" | "emcee" | "dance";

export interface Interest {
  id: string;
  label: string;
  icon: InterestIcon;
}

export const aboutHeading = "Hi, I'm Ovya Anand.";

export const aboutParagraphs: string[] = [
  "I'm a software developer who likes building things that are useful, thoughtful, and every now and then a little bit cute. I'm comfortable working across a full-stack application, and I care about how it looks and feels as much as how it runs.",
  "I'm drawn to AI, ML and data, and especially to human-computer interaction. Touchless HCI, a gesture and offline voice control system I've filed a patent for, is where those interests came together.",
  "I completed my B.Tech in Computer Science and Business Systems at Thiagarajar College of Engineering in 2026. Alongside that, I've been working through the BS in Data Science and Applications at IIT Madras: the Foundation and Diploma levels are done, and I’m moving on to the degree level.",
];

export const focusAreas: string[] = [
  "Full-stack apps",
  "AI / ML / Data",
  "Human-computer interaction",
  "Design-conscious",
];

export const beyondCode: Interest[] = [
  { id: "music", label: "Music", icon: "music" },
  { id: "writing", label: "Creative writing", icon: "writing" },
  { id: "editorial", label: "Editorial / magazine work", icon: "editorial" },
  { id: "events", label: "Event organizing", icon: "events" },
  { id: "emcee", label: "Emceeing and cultural involvement", icon: "emcee" },
  { id: "dance", label: "Dance", icon: "dance" },
];