// src/components/pixel-ui/ThemeToggle.tsx
import { Moon, Sun } from "lucide-react";
import { useAudio } from "../../contexts/AudioContext";
import { useTheme } from "../../contexts/ThemeContext";
import styles from "./Toggle.module.css";

export default function ThemeToggle({ showLabel = false }: { showLabel?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const { play } = useAudio();
  const next = theme === "day" ? "Dream" : "Day";
  const Icon = theme === "day" ? Moon : Sun;

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      onClick={() => {
        toggleTheme();
        play("click");
      }}
    >
      <Icon size={18} aria-hidden="true" />
      {showLabel && <span>{next} Mode</span>}
    </button>
  );
}