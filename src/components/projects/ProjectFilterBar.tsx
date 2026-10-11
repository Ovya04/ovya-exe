// src/components/projects/ProjectFilterBar.tsx
import { useAudio } from "../../contexts/AudioContext";
import type { ProjectFilter } from "../../utils/projects";
import { cx } from "../../utils/cx";
import styles from "./ProjectFilterBar.module.css";

export interface FilterOption {
  value: ProjectFilter;
  label: string;
  count: number;
}

interface ProjectFilterBarProps {
  value: ProjectFilter;
  options: FilterOption[];
  onChange: (value: ProjectFilter) => void;
}

export default function ProjectFilterBar({ value, options, onChange }: ProjectFilterBarProps) {
  const { play } = useAudio();

  return (
    <div className={styles.bar} role="group" aria-label="Filter projects by category">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            className={cx(styles.button, active && styles.active)}
            aria-pressed={active}
            onClick={() => {
              play("click");
              onChange(option.value);
            }}
          >
            {option.label}
            <span className={styles.count}>{option.count}</span>
          </button>
        );
      })}
    </div>
  );
}