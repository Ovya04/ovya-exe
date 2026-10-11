// src/components/home/Sprout.tsx
import { useState } from "react";
import { useAudio } from "../../contexts/AudioContext";
import { cx } from "../../utils/cx";
import { PixelSprite } from "../pixel-ui";
import styles from "./Sprout.module.css";
import { sproutSprites } from "./sproutSprites";

const CLICKS_TO_BLOOM = 5;

export default function Sprout() {
  const [clicks, setClicks] = useState(0);
  const { play } = useAudio();

  const stage = clicks >= CLICKS_TO_BLOOM ? 2 : clicks >= 2 ? 1 : 0;
  const bloomed = stage === 2;

  const handleClick = () => {
    if (bloomed) {
      play("click");
      return;
    }
    const next = clicks + 1;
    setClicks(next);
    play(next >= CLICKS_TO_BLOOM ? "bloom" : "click");
  };

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={cx(styles.button, bloomed && styles.bloomed)}
        aria-label={bloomed ? "A little flower is blooming" : "Water the little sprout"}
        title={bloomed ? undefined : "Water the sprout"}
        onClick={handleClick}
      >
        <PixelSprite {...sproutSprites[stage]} className={styles.sprite} />
      </button>
      <span className="sr-only" role="status">{bloomed ? "The sprout bloomed into a flower!" : ""}</span>
    </div>
  );
}