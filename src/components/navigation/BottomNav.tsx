// src/components/navigation/BottomNav.tsx
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAudio } from "../../contexts/AudioContext";
import { navItems } from "../../data/navigation";
import { cx } from "../../utils/cx";
import { DialogWindow, SoundToggle, ThemeToggle } from "../pixel-ui";
import styles from "./BottomNav.module.css";
import { navIcons } from "./navIcons";

const primaryItems = navItems.filter((item) => item.mobilePrimary);
const moreItems = navItems.filter((item) => !item.mobilePrimary);

export default function BottomNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const { pathname } = useLocation();
  const { play } = useAudio();
  const moreActive = moreItems.some((item) => pathname.startsWith(item.path));

  return (
    <>
      <nav className={styles.bar} aria-label="Primary (mobile)">
        <ul className={styles.list}>
          {primaryItems.map(({ path, label, icon }) => {
            const Icon = navIcons[icon];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) => cx(styles.link, isActive && styles.active)}
                  onClick={() => play("nav")}
                >
                  <Icon size={20} aria-hidden="true" />
                  <span>{label}</span>
                </NavLink>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              className={cx(styles.link, moreActive && styles.active)}
              aria-haspopup="dialog"
              onClick={() => setMoreOpen(true)}
            >
              <Menu size={20} aria-hidden="true" />
              <span>More</span>
            </button>
          </li>
        </ul>
      </nav>

      <DialogWindow open={moreOpen} title="MORE.exe" tone="mint" onClose={() => setMoreOpen(false)}>
        <ul className={styles.moreList}>
          {moreItems.map(({ path, label, icon }) => {
            const Icon = navIcons[icon];
            return (
              <li key={path}>
                <NavLink to={path} className={styles.moreLink} onClick={() => setMoreOpen(false)}>
                  <Icon size={18} aria-hidden="true" />
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className={styles.tools}>
          <ThemeToggle showLabel />
          <SoundToggle showLabel />
        </div>
      </DialogWindow>
    </>
  );
}