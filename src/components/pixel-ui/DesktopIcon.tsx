// src/components/pixel-ui/DesktopIcon.tsx
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAudio } from "../../contexts/AudioContext";
import { cx } from "../../utils/cx";
import styles from "./DesktopIcon.module.css";
import PixelTooltip from "./PixelTooltip";
import type { WindowTone } from "./PixelWindow";

interface DesktopIconProps {
  label: string;
  icon: ReactNode;
  /** Tiny hover label, e.g. "[ inspect projects ]" */
  hint?: string;
  to?: string;
  onClick?: () => void;
  tone?: WindowTone;
  className?: string;
}

export default function DesktopIcon({ label, icon, hint, to, onClick, tone = "lavender", className }: DesktopIconProps) {
  const { play } = useAudio();
  const handleClick = () => {
    play("nav");
    onClick?.();
  };

  const classes = cx(styles.icon, className);
  const inner = (
    <>
      <span className={cx(styles.tile, styles[tone])} aria-hidden="true">{icon}</span>
      <span className={styles.label}>{label}</span>
    </>
  );
  const control = to ? (
    <Link to={to} className={classes} onClick={handleClick}>{inner}</Link>
  ) : (
    <button type="button" className={classes} onClick={handleClick}>{inner}</button>
  );

  return hint ? <PixelTooltip label={hint}>{control}</PixelTooltip> : control;
}