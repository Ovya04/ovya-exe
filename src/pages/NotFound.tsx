// src/pages/NotFound.tsx
import { PixelButton, PixelWindow } from "../components/pixel-ui";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./NotFound.module.css";

export default function NotFound() {
  useDocumentTitle("Not found");

  return (
    <div className={styles.wrap}>
      <PixelWindow title="ERROR.exe" titleAs="h1" tone="pink">
        <p className={styles.code}>404</p>
        <p>This file doesn't exist (yet). It may have moved, or the link might be mistyped.</p>
        <div className={styles.actions}>
          <PixelButton to="/">Back to desktop</PixelButton>
          <PixelButton to="/projects" variant="secondary">Browse projects</PixelButton>
        </div>
      </PixelWindow>
    </div>
  );
}