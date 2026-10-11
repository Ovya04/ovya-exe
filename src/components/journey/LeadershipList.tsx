// src/components/journey/LeadershipList.tsx
import type { LeadershipRole } from "../../types/content";
import styles from "./LeadershipList.module.css";

export default function LeadershipList({ roles }: { roles: LeadershipRole[] }) {
  return (
    <ul className={styles.grid}>
      {roles.map((role) => (
        <li key={role.id} className={styles.card}>
          <p className={styles.role}>{role.role}</p>
          <p className={styles.org}>{role.organization}</p>
        </li>
      ))}
    </ul>
  );
}