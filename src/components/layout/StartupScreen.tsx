// src/components/layout/StartupScreen.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { profile } from "../../data/profile";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { PixelButton, PixelWindow } from "../pixel-ui";
import styles from "./StartupScreen.module.css";

const SESSION_KEY = "ovya:booted";

const hasBooted = () => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
};

export default function StartupScreen() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(() => !hasBooted());
  const [progress, setProgress] = useState(0);

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (reduced) {
      finish();
      return;
    }
    const id = window.setInterval(() => setProgress((value) => Math.min(value + 5, 100)), 55);
    return () => window.clearInterval(id);
  }, [visible, reduced, finish]);

  useEffect(() => {
    if (progress < 100) return;
    const id = window.setTimeout(finish, 250);
    return () => window.clearTimeout(id);
  }, [progress, finish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <PixelWindow title={profile.brand} titleAs="p" tone="lavender" className={styles.window}>
            <p className={styles.text} role="status">Initializing {profile.brand}…</p>
            <div className={styles.track} aria-hidden="true">
              <div className={styles.fill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.footer}>
              <span className={styles.percent} aria-hidden="true">{progress}%</span>
              <PixelButton size="sm" variant="ghost" onClick={finish}>Skip</PixelButton>
            </div>
          </PixelWindow>
        </motion.div>
      )}
    </AnimatePresence>
  );
}