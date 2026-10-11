// src/components/about/BeyondCode.tsx
import { beyondCode } from "../../data/about";
import { PixelSprite, PixelWindow } from "../pixel-ui";
import { interestSprites } from "./interestSprites";
import styles from "./BeyondCode.module.css";

export default function BeyondCode() {
  return (
    <PixelWindow title="Beyond Code" titleAs="h2" tone="mint">
      <ul className={styles.list}>
        {beyondCode.map(({ id, label, icon }) => (
          <li key={id} className={styles.item}>
            <span className={styles.icon} aria-hidden="true">
              <PixelSprite {...interestSprites[icon]} className={styles.sprite} />
            </span>
            {label}
          </li>
        ))}
      </ul>
    </PixelWindow>
  );
}