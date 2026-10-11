import type { JourneyEntry, LeadershipRole } from "../types/content";

/** Display order = array order (newest first). */
export const journey: JourneyEntry[] = [
  {
    id: "tce-btech",
    kind: "education",
    title: "B.Tech, Computer Science and Business Systems",
    organization: "Thiagarajar College of Engineering",
    period: "Completed 2026",
  },
  {
    id: "iitm-bs",
    kind: "education",
    title: "BS in Data Science and Applications",
    organization: "IIT Madras",
    period: "Degree level in progress",
    summary:
      "Foundation and Diploma levels completed, with the Diploma in Programming and Data Science. Now progressing to the Degree level.",
    details: ["18 courses across Foundation and Diploma levels", "4 projects"],
  },
  {
    id: "class-12",
    kind: "education",
    title: "Class 12 (CBSE)",
    organization: "Cauvery Global School",
  },
  {
    id: "class-10",
    kind: "education",
    title: "Class 10 (CBSE)",
    organization: "Care International School",
    period: "Board exams 2019",
  },
];

export const leadership: LeadershipRole[] = [
  { id: "andhadhi", role: "General Secretary", organization: "Music Club (Andhadhi)" },
  { id: "csbs-magazine", role: "Magazine / Editorial Lead", organization: "CSBS Association" },
  { id: "cultural", role: "Cultural involvement", organization: "College cultural events" },
  { id: "events", role: "Event organization", organization: "College events" },
];