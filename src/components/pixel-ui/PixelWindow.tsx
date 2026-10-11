// src/components/pixel-ui/PixelWindow.tsx
import { X } from "lucide-react";
import { useId, type ReactNode } from "react";
import { cx } from "../../utils/cx";
import styles from "./PixelWindow.module.css";

export type WindowTone = "lavender" | "pink" | "blue" | "mint" | "yellow";

interface PixelWindowProps {
  title: string;
  titleAs?: "h1" | "h2" | "h3" | "p";
  icon?: ReactNode;
  tone?: WindowTone;
  onClose?: () => void;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
  flush?: boolean;
}

export default function PixelWindow({
  title,
  titleAs: TitleTag = "h2",
  icon,
  tone = "lavender",
  onClose,
  className,
  bodyClassName,
  children,
  flush
}: PixelWindowProps) {
  const titleId = useId();

  return (
    <section className={cx(styles.window, styles[tone], className)} aria-labelledby={titleId}>
      <header className={styles.titlebar}>
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        <TitleTag id={titleId} className={styles.title}>{title}</TitleTag>
        {onClose ? (
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close window">
            <X size={14} strokeWidth={3} aria-hidden="true" />
          </button>
        ) : (
          <span className={styles.dots} aria-hidden="true"><i /><i /></span>
        )}
      </header>
      <div className={cx(styles.body, flush && styles.flush, bodyClassName)}>{children}</div>
    </section>
  );
}