import { courses } from "../data/coursework";
import { projects } from "../data/projects";
import type { Course, Skill } from "../types/content";
import type { Project } from "../types/project";

const normalize = (value: string) => value.trim().toLowerCase();

export interface CourseUsage {
  course: Course;
  projects: Project[];
}

export function getSkillUsage(skill: Skill): { projects: Project[]; notes: string[]; courses: CourseUsage[] } {
  const names = [skill.name, ...(skill.aliases ?? [])].map(normalize);

  const courseUsage = (skill.courseIds ?? [])
    .map((id) => courses.find((course) => course.id === id))
    .filter((course): course is Course => Boolean(course))
    .map((course) => ({
      course,
      projects: (course.projectIds ?? [])
        .map((id) => projects.find((project) => project.id === id))
        .filter((project): project is Project => Boolean(project)),
    }));

  return {
    projects: projects.filter((project) => project.techStack.some((tech) => names.includes(normalize(tech)))),
    notes: skill.extraUsedIn ?? [],
    courses: courseUsage,
  };
}