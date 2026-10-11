// src/components/resume/ResumeSelector.tsx
import { resumes } from "../../data/resumes";
import { PixelWindow } from "../pixel-ui";
import ResumeCard from "./ResumeCard";
import styles from "./ResumeSelector.module.css";

export default function ResumeSelector() {
  return (
    <div className={styles.wrap}>
      <PixelWindow title="SELECT RESUME" titleAs="h1" tone="pink">
        <p className={styles.hint}>Two versions, depending on what you're hiring for.</p>
        <ul className={styles.list}>
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </ul>
      </PixelWindow>
    </div>
  );
}