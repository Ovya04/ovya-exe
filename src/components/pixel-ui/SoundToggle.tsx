// src/components/pixel-ui/SoundToggle.tsx
import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "../../contexts/AudioContext";
import styles from "./Toggle.module.css";

export default function SoundToggle({ showLabel = false }: { showLabel?: boolean }) {
  const { muted, toggleMuted, play } = useAudio();
  const Icon = muted ? VolumeX : Volume2;
  const label = muted ? "Turn sound on" : "Turn sound off";

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={label}
      title={label}
      onClick={() => {
        if (muted) play("click", { force: true }); // audible confirmation when unmuting
        toggleMuted();
      }}
    >
      <Icon size={18} aria-hidden="true" />
      {showLabel && <span>{muted ? "Sound off" : "Sound on"}</span>}
    </button>
  );
}