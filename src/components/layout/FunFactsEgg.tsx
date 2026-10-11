// src/components/layout/FunFactsEgg.tsx
import { useEffect, useState } from "react";
import { funFacts } from "../../data/funFacts";
import { FUN_FACTS_EVENT } from "../../utils/easterEggs";
import { DialogWindow, PixelButton } from "../pixel-ui";
import styles from "./FunFactsEgg.module.css";

const SECRET = "ovya";

const isTypingTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);

export default function FunFactsEgg() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const show = () => {
      setIndex(Math.floor(Math.random() * funFacts.length));
      setOpen(true);
    };

    let buffer = "";
    const onKey = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;
      if (isTypingTarget(event.target)) return;
      buffer = (buffer + event.key.toLowerCase()).slice(-SECRET.length);
      if (buffer === SECRET) {
        buffer = "";
        show();
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener(FUN_FACTS_EVENT, show);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(FUN_FACTS_EVENT, show);
    };
  }, []);

  if (funFacts.length === 0) return null;

  return (
    <DialogWindow open={open} title="FUN_FACTS.txt" tone="lavender" onClose={() => setOpen(false)} openSound="success">
      <p className={styles.kicker}>Fun fact {index + 1} of {funFacts.length}</p>
      <p className={styles.fact}>{funFacts[index]}</p>
      <div className={styles.actions}>
        <PixelButton variant="secondary" onClick={() => setIndex((current) => (current + 1) % funFacts.length)}>
          Another one
        </PixelButton>
        <PixelButton variant="ghost" onClick={() => setOpen(false)}>Close</PixelButton>
      </div>
    </DialogWindow>
  );
}