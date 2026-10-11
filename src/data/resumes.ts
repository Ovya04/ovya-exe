import type { ResumeOption } from "../types/content";

const drive = (id: string) => ({
  viewUrl: `https://drive.google.com/file/d/${id}/view?usp=sharing`,
  downloadUrl: `https://drive.google.com/uc?export=download&id=${id}`,
});

export const resumes: ResumeOption[] = [
  {
    id: "software-development",
    title: "Software Development Resume",
    description: "Full-stack and application development focus.",
    iconKey: "laptop",
    ...drive("19lkSe1sc4SM-ckKl8fEfhTP54YHSbFwP"),
  },
  {
    id: "data-ai-ml",
    title: "Data / AI / ML Resume",
    description: "Data science, machine learning and AI focus.",
    iconKey: "bot",
    ...drive("15xVEf8F0hXcgaq4JSXgxKlP_mljGFNws"),
  },
];