// src/components/achievements/AchievementCard.tsx
import type { Achievement } from "../../types/content";
import { hasText } from "../../utils/text";
import { PixelSprite } from "../pixel-ui";
import { achievementSprites } from "./achievementSprites";
import styles from "./AchievementCard.module.css";

interface AchievementCardProps {
  achievement: Achievement;
  onOpen: (id: string) => void;
}

export default function AchievementCard({ achievement, onOpen }: AchievementCardProps) {
  const { id, title, subtitle, icon } = achievement;

  return (
    <button type="button" className={styles.card} aria-haspopup="dialog" onClick={() => onOpen(id)}>
      <PixelSprite {...achievementSprites[icon]} className={styles.sprite} />
      <span className={styles.title}>{title}</span>
      {hasText(subtitle) && <span className={styles.subtitle}>{subtitle}</span>}
    </button>
  );
}