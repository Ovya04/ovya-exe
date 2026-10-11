// src/components/home/HeroDialog.tsx
import Avatar from "../avatar/Avatar";
import { PixelButton, PixelWindow } from "../pixel-ui";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";
import styles from "./HeroDialog.module.css";

const externalLinks = socialLinks.filter((link) => link.id === "github" || link.id === "linkedin");

export default function HeroDialog() {
  return (
    <PixelWindow title={profile.brand} titleAs="p" tone="pink">
      <div className={styles.avatarMobile}>
        <Avatar />
      </div>

      <h1 className={styles.heading}>{profile.greeting}</h1>

      <ul className={styles.roles}>
        {profile.roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>

      <p className={styles.intro}>
        {profile.intro}
        <span className={styles.caret} aria-hidden="true" />
      </p>

      <div className={styles.actions}>
        <PixelButton to="/projects">Explore My Work</PixelButton>
      </div>

      <div className={styles.links}>
        <PixelButton to="/resume" size="sm" variant="accent">Resume</PixelButton>
        <PixelButton to="/contact" size="sm" variant="secondary">Contact</PixelButton>
        {externalLinks.map((link) => (
          <PixelButton key={link.id} href={link.href} external size="sm" variant="ghost">
            {link.label}
          </PixelButton>
        ))}
      </div>
    </PixelWindow>
  );
}