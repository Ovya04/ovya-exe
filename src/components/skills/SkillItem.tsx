// src/components/skills/SkillItem.tsx
import type { Skill } from "../../types/content";
import { cx } from "../../utils/cx";
import type { WindowTone } from "../pixel-ui";
import styles from "./SkillItem.module.css";

interface SkillItemProps {
  skill: Skill;
  tone: WindowTone;
  selected: boolean;
  onSelect: (id: string) => void;
}

export default function SkillItem({ skill, tone, selected, onSelect }: SkillItemProps) {
  const select = () => onSelect(skill.id);

  return (
    <button
      type="button"
      className={cx(styles.slot, selected && styles.selected)}
      aria-pressed={selected}
      onClick={select}
      onMouseEnter={select}
      onFocus={select}
    >
      <span className={cx(styles.glyph, styles[tone])} aria-hidden="true">
        {skill.glyph ?? skill.name.slice(0, 2)}
      </span>
      <span className={styles.name}>{skill.name}</span>
    </button>
  );
}