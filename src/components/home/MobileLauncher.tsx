// src/components/home/MobileLauncher.tsx
import { Link } from "react-router-dom";
import { useAudio } from "../../contexts/AudioContext";
import { homeObjects } from "../../data/homeObjects";
import { cx } from "../../utils/cx";
import { PixelSprite, PixelWindow } from "../pixel-ui";
import styles from "./MobileLauncher.module.css";
import { objectSprites } from "./sprites";

export default function MobileLauncher() {
  const { play } = useAudio();

  return (
    <PixelWindow title="LAUNCHER.exe" titleAs="h2" tone="mint">
      <ul className={styles.grid}>
        {homeObjects.map(({ id, label, hint, to, tone, sprite }) => (
          <li key={id}>
            <Link to={to} className={styles.tile} onClick={() => play("nav")}>
              <span className={cx(styles.thumb, styles[tone])} aria-hidden="true">
                <PixelSprite {...objectSprites[sprite]} className={styles.sprite} />
              </span>
              <span className={styles.text}>
                <span className={styles.label}>{label}</span>
                <span className={styles.hint}>{hint}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </PixelWindow>
  );
}