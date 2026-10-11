// src/components/achievements/AchievementShelf.tsx
import { useState } from "react";
import { achievements } from "../../data/achievements";
import { hasText } from "../../utils/text";
import { DialogWindow, PixelButton, PixelSprite, PixelWindow } from "../pixel-ui";
import AchievementCard from "./AchievementCard";
import { achievementSprites } from "./achievementSprites";
import styles from "./AchievementShelf.module.css";

export default function AchievementShelf() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = achievements.find((achievement) => achievement.id === activeId);
  const close = () => setActiveId(null);

  return (
    <>
      <PixelWindow title="TROPHY_SHELF.exe" titleAs="h1" tone="yellow">
        <p className={styles.intro}>Select a trophy to unlock the details.</p>
        <ul className={styles.shelf}>
          {achievements.map((achievement) => (
            <li key={achievement.id} className={styles.slot}>
              <AchievementCard achievement={achievement} onOpen={setActiveId} />
            </li>
          ))}
        </ul>
      </PixelWindow>

      <DialogWindow open={Boolean(active)} title="ACHIEVEMENT.exe" tone="yellow" onClose={close} openSound="unlock">
        {active && (
          <div className={styles.unlock}>
            <p className={styles.banner}>
              <span aria-hidden="true">★</span> ACHIEVEMENT UNLOCKED! <span aria-hidden="true">★</span>
            </p>
            <PixelSprite {...achievementSprites[active.icon]} className={styles.bigSprite} />
            <h2 className={styles.name}>{active.title}</h2>
            {hasText(active.subtitle) && <p className={styles.sub}>– {active.subtitle}</p>}
            <p className={styles.desc}>{active.description}</p>
            <PixelButton onClick={close}>Nice!</PixelButton>
          </div>
        )}
      </DialogWindow>
    </>
  );
}