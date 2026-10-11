// src/pages/About.tsx  (replace the placeholder)
import Avatar from "../components/avatar/Avatar";
import BeyondCode from "../components/about/BeyondCode";
import { PixelButton, PixelWindow } from "../components/pixel-ui";
import { aboutHeading, aboutParagraphs, focusAreas } from "../data/about";
import { profile } from "../data/profile";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./About.module.css";

export default function About() {
  useDocumentTitle("About");

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <PixelWindow title="ABOUT.txt" titleAs="h1" tone="lavender">
          <h2 className={styles.heading}>{aboutHeading}</h2>
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>{paragraph}</p>
          ))}

          <ul className={styles.chips} aria-label="Focus areas">
            {focusAreas.map((area) => <li key={area}>{area}</li>)}
          </ul>

          <div className={styles.actions}>
            <PixelButton to="/projects">See my projects</PixelButton>
            <PixelButton to="/resume" variant="accent">Resume</PixelButton>
            <PixelButton to="/contact" variant="secondary">Say hi</PixelButton>
          </div>
        </PixelWindow>

        <PixelWindow title="PROFILE.png" titleAs="h2" tone="pink" className={styles.profile}>
          <div className={styles.avatar}><Avatar autoWave /></div>
          <p className={styles.name}>{profile.fullName}</p>
          <ul className={styles.roles}>
            {profile.roles.map((role) => <li key={role}>{role}</li>)}
          </ul>
        </PixelWindow>
      </div>

      <BeyondCode />
    </div>
  );
}