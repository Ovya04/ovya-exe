// src/components/skills/SkillInventory.tsx
import { useState } from "react";
import { skillCategories } from "../../data/skills";
import { PixelWindow, type WindowTone } from "../pixel-ui";
import SkillDetail from "./SkillDetail";
import SkillItem from "./SkillItem";
import styles from "./SkillInventory.module.css";

const tones: WindowTone[] = ["blue", "mint", "lavender", "pink"];

const entries = skillCategories.flatMap((category, index) =>
  category.skills.map((skill) => ({
    skill,
    categoryTitle: category.title,
    tone: tones[index % tones.length],
  })),
);

export default function SkillInventory() {
  const [selectedId, setSelectedId] = useState(entries[0]?.skill.id);
  const selected = entries.find((entry) => entry.skill.id === selectedId) ?? entries[0];

  return (
    <div className={styles.layout}>
      <PixelWindow title="SKILLS.inventory" titleAs="h1" tone="mint">
        <p className={styles.hint}>Hover, focus or tap an item to inspect it.</p>

        {skillCategories.map((category, index) => (
          <section key={category.id} className={styles.category} aria-labelledby={`skills-${category.id}`}>
            <h2 id={`skills-${category.id}`} className={styles.title}>{category.title}</h2>
            <ul className={styles.grid}>
              {category.skills.map((skill) => (
                <li key={skill.id}>
                  <SkillItem
                    skill={skill}
                    tone={tones[index % tones.length]}
                    selected={skill.id === selected?.skill.id}
                    onSelect={setSelectedId}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </PixelWindow>

      {selected && (
        <div className={styles.panel}>
          <SkillDetail skill={selected.skill} categoryTitle={selected.categoryTitle} />
        </div>
      )}
    </div>
  );
}