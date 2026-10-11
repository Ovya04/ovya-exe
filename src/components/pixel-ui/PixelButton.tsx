// src/components/pixel-ui/PixelButton.tsx
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAudio, type SfxName } from "../../contexts/AudioContext";
import { cx } from "../../utils/cx";
import styles from "./PixelButton.module.css";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "sm" | "md";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  /** Sound effect on click. `false` disables it. */
  sound?: SfxName | false;
  "aria-label"?: string;
  onClick?: () => void;
}
interface ButtonProps extends CommonProps {
  to?: undefined;
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
}
interface RouterLinkProps extends CommonProps {
  to: string;
  href?: undefined;
}
interface AnchorProps extends CommonProps {
  href: string;
  to?: undefined;
  external?: boolean;
  download?: string | boolean;
}
export type PixelButtonProps = ButtonProps | RouterLinkProps | AnchorProps;

export default function PixelButton(props: PixelButtonProps) {
  const { children, variant = "primary", size = "md", icon, className, sound = "click", onClick } = props;
  const ariaLabel = props["aria-label"];
  const { play } = useAudio();

  const classes = cx(styles.button, styles[variant], styles[size], className);
  const handleClick = () => {
    if (sound) play(sound);
    onClick?.();
  };
  const content = (
    <>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes} onClick={handleClick} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }
  if (props.href !== undefined) {
    const { href, external, download } = props;
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
        aria-label={ariaLabel}
        download={download}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      className={classes}
      onClick={handleClick}
      disabled={props.disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}