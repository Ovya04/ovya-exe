// src/components/avatar/Avatar.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useAudio } from "../../contexts/AudioContext";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { cx } from "../../utils/cx";
import { openFunFacts } from "../../utils/easterEggs";
import { spriteSize, spriteToRects } from "../../utils/sprite";
import { AVATAR_EYES, AVATAR_EYE_COLOR, avatarSprite } from "./avatarSprite";
import { poseProps, type AvatarPose } from "./avatarPoses";
import styles from "./Avatar.module.css";

interface AvatarProps {
  className?: string;
  /** Wave once shortly after mounting */
  autoWave?: boolean;
  pose?: AvatarPose;
  /** Faster stepping bob while she walks (set by the room) */
  walking?: boolean;
  /** Mirror horizontally (walking the other way) */
  flipped?: boolean;
}

const { width, height } = spriteSize(avatarSprite.rows);
const SECRET_CLICKS = 5;
const SECRET_WINDOW_MS = 3000;

export default function Avatar({
  className,
  autoWave = false,
  pose = "idle",
  walking = false,
  flipped = false,
}: AvatarProps) {
  const reduced = useReducedMotion();
  const { play } = useAudio();
  // Changing the key remounts the arm, which restarts the CSS animation on every click
  const [waveKey, setWaveKey] = useState(0);
  const recentClicks = useRef<number[]>([]);
  const prop = pose === "idle" ? undefined : poseProps[pose];

  const { bodyRects, armRects } = useMemo(() => {
    const rects = spriteToRects(avatarSprite);
    return {
      bodyRects: rects.filter((rect) => rect.key !== "R"),
      armRects: rects.filter((rect) => rect.key === "R"),
    };
  }, []);
  const propRects = useMemo(() => (prop ? spriteToRects(prop.sprite) : []), [prop]);

  useEffect(() => {
    if (!autoWave || reduced) return;
    const id = window.setTimeout(() => setWaveKey((key) => key + 1), 1200);
    return () => window.clearTimeout(id);
  }, [autoWave, reduced]);

  const handleClick = () => {
    play("wave");
    if (!reduced) setWaveKey((key) => key + 1);

    // Easter egg: five quick clicks open the fun-facts window
    const now = Date.now();
    recentClicks.current = [...recentClicks.current.filter((time) => now - time < SECRET_WINDOW_MS), now];
    if (recentClicks.current.length >= SECRET_CLICKS) {
      recentClicks.current = [];
      openFunFacts();
    }
  };

  return (
    <button
      type="button"
      className={cx(styles.button, flipped && styles.flipped, walking && styles.walking, className)}
      aria-label="Pixel avatar of Ovya. Activate to wave."
      onClick={handleClick}
    >
      <svg
        className={styles.svg}
        viewBox={`0 0 ${width} ${height}`}
        shapeRendering="crispEdges"
        aria-hidden="true"
        focusable="false"
      >
        <g>
          {bodyRects.map((rect, index) => (
            <rect key={index} x={rect.x} y={rect.y} width={rect.w} height={1} style={{ fill: rect.color }} />
          ))}
        </g>
        <g className={styles.eyes}>
          {AVATAR_EYES.map(({ x, y }) => (
            <rect key={x} className={styles.eye} x={x} y={y} width={1} height={1} style={{ fill: AVATAR_EYE_COLOR }} />
          ))}
        </g>
        {!prop?.hideArm && (
          <g key={waveKey} className={cx(styles.arm, waveKey > 0 && styles.wave)}>
            {armRects.map((rect, index) => (
              <rect key={index} x={rect.x} y={rect.y} width={rect.w} height={1} style={{ fill: rect.color }} />
            ))}
          </g>
        )}
        {prop && (
          <g transform={`translate(${prop.x} ${prop.y})`}>
            {propRects.map((rect, index) => (
              <rect key={index} x={rect.x} y={rect.y} width={rect.w} height={1} style={{ fill: rect.color }} />
            ))}
          </g>
        )}
      </svg>
    </button>
  );
}
