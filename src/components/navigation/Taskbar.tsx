// src/components/navigation/Taskbar.tsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAudio } from "../../contexts/AudioContext";
import { navItems, type NavItem } from "../../data/navigation";
import { socialLinks } from "../../data/socialLinks";
import { cx } from "../../utils/cx";
import { PixelTooltip, SoundToggle, ThemeToggle } from "../pixel-ui";
import { navIcons } from "./navIcons";
import styles from "./Taskbar.module.css";

const mainItems = navItems.filter((item) => !item.highlight);
const shortcutItems = navItems.filter((item) => item.highlight);
const quickLinks = socialLinks.filter((link) => link.quick);

const formatTime = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

function Clock() {
  const [time, setTime] = useState(formatTime);
  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  return <span className={styles.clock} aria-hidden="true">{time}</span>;
}

function TaskbarLink({ item, className }: { item: NavItem; className?: string }) {
  const { play } = useAudio();
  const Icon = navIcons[item.icon];
  return (
    <PixelTooltip label={item.label} className={styles.tipWrap}>
      <NavLink
        to={item.path}
        end={item.path === "/"}
        className={({ isActive }) => cx(styles.item, className, isActive && styles.active)}
        onClick={() => play("nav")}
      >
        <Icon size={18} aria-hidden="true" className={styles.icon} />
        <span className={styles.itemLabel}>{item.label}</span>
      </NavLink>
    </PixelTooltip>
  );
}

export default function Taskbar() {
  return (
    <nav className={styles.taskbar} aria-label="Primary">
      <span className={styles.brand}>OVYA.exe</span>

      <ul className={styles.items}>
        {mainItems.map((item) => (
          <li key={item.path}><TaskbarLink item={item} /></li>
        ))}
      </ul>

      <div className={styles.tray}>
        {shortcutItems.map((item) => (
          <TaskbarLink key={item.path} item={item} className={styles.shortcut} />
        ))}
        {quickLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cx(styles.item, styles.badge)}
            aria-label={`${link.label} (opens in new tab)`}
            title={link.label}
          >
            {link.short}
          </a>
        ))}
        <SoundToggle />
        <ThemeToggle />
        <Clock />
      </div>
    </nav>
  );
}