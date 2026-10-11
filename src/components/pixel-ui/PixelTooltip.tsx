// src/components/pixel-ui/PixelTooltip.tsx
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";
import styles from "./PixelTooltip.module.css";

interface PixelTooltipProps {
  label: string;
  placement?: "top" | "bottom";
  className?: string;
  children: ReactNode;
}

export default function PixelTooltip({ label, placement = "top", className, children }: PixelTooltipProps) {
  return (
    <span className={cx(styles.wrap, className)}>
      {children}
      <span className={cx(styles.tip, styles[placement])} aria-hidden="true">{label}</span>
    </span>
  );
}