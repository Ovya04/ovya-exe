// src/components/pixel-ui/DialogWindow.tsx
import { useEffect, useRef, type ReactNode } from "react";
import { useAudio, type SfxName } from "../../contexts/AudioContext";
import styles from "./DialogWindow.module.css";
import PixelWindow, { type WindowTone } from "./PixelWindow";

interface DialogWindowProps {
  open: boolean;
  title: string;
  tone?: WindowTone;
  onClose: () => void;
  /** Sound when opening. `false` for silence. Closing always plays "close". */
  openSound?: SfxName | false;
  children: ReactNode;
}

export default function DialogWindow({ open, title, tone, onClose, openSound = "open", children }: DialogWindowProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const wasOpen = useRef(false);
  const { play } = useAudio();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    if (open !== wasOpen.current) {
      const sound = open ? openSound : "close";
      if (sound) play(sound);
      wasOpen.current = open;
    }
  }, [open, play, openSound]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={title}
      onClose={onClose} /* fires on Escape too */
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose(); // backdrop click
      }}
    >
      {open && (
        <PixelWindow title={title} tone={tone} onClose={onClose}>
          {children}
        </PixelWindow>
      )}
    </dialog>
  );
}