// src/components/home/RoomObject.tsx
import { Link } from "react-router-dom";
import { useAudio } from "../../contexts/AudioContext";
import type { HomeObject } from "../../data/homeObjects";
import { PixelSprite } from "../pixel-ui";
import styles from "./RoomObject.module.css";
import { objectSprites } from "./sprites";

export default function RoomObject({ object }: { object: HomeObject }) {
  const { play } = useAudio();
  const { label, hint, to, sprite, position } = object;

  return (
    <div className={styles.root} style={position}>
      <Link to={to} className={styles.link} aria-label={`${label}: ${hint}`} onClick={() => play("nav")}>
        <PixelSprite {...objectSprites[sprite]} className={styles.sprite} />
        <span className={styles.tag} aria-hidden="true">
          <span className={styles.name}>{label}</span>
          <span className={styles.hint}>[ {hint} ]</span>
        </span>
      </Link>
    </div>
  );
}