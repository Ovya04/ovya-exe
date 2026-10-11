import { Fragment } from "react";
import { Link } from "react-router-dom";
import type { Skill } from "../../types/content";
import { getSkillUsage } from "../../utils/skills";
import { PixelWindow } from "../pixel-ui";
import styles from "./SkillDetail.module.css";

interface SkillDetailProps {
  skill: Skill;
  categoryTitle: string;
}

export default function SkillDetail({ skill, categoryTitle }: SkillDetailProps) {
  const usage = getSkillUsage(skill);
  const hasUsed = usage.projects.length > 0 || usage.notes.length > 0;
  const hasCourses = usage.courses.length > 0;

  return (
    <PixelWindow title="ITEM.inspect" titleAs="h2" tone="yellow">
      <div aria-live="polite">
        <p className={styles.name}>{skill.name}</p>
        <p className={styles.category}>{categoryTitle}</p>

        {hasUsed && (
          <>
            <h3 className={styles.heading}>Used in:</h3>
            <ul className={styles.list}>
              {usage.projects.map((project) => (
                <li key={project.id}>
                  <Link to={`/projects/${project.id}`}>{project.title}</Link>
                </li>
              ))}
              {usage.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </>
        )}

        {hasCourses && (
          <>
            <h3 className={styles.heading}>Coursework:</h3>
            <ul className={styles.list}>
              {usage.courses.map(({ course, projects }) => (
                <li key={course.id}>
                  <span>
                    {course.name}
                    <span className={styles.meta}>{course.level}</span>
                    {projects.length > 0 && (
                      <span className={styles.meta}>
                        Project:{" "}
                        {projects.map((project, index) => (
                          <Fragment key={project.id}>
                            {index > 0 && ", "}
                            <Link to={`/projects/${project.id}`}>{project.title}</Link>
                          </Fragment>
                        ))}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}

        {!hasUsed && !hasCourses && <p className={styles.empty}>Not linked to a project yet.</p>}
      </div>
    </PixelWindow>
  );
}