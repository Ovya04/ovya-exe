// src/contexts/AudioContext.tsx
import { createContext, useCallback, useContext, useMemo, useRef, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type SfxName = "click" | "open" | "close" | "nav" | "success" | "wave" | "bloom" | "unlock";

interface Note { freq: number; duration: number }

const VOLUME = 0.04; // deliberately quiet
const MIN_GAP_MS = 60; // same sound can't retrigger faster than this

const SFX: Record<SfxName, Note[]> = {
  click: [{ freq: 660, duration: 0.05 }],
  nav: [{ freq: 520, duration: 0.06 }],
  open: [{ freq: 440, duration: 0.06 }, { freq: 660, duration: 0.08 }],
  close: [{ freq: 660, duration: 0.06 }, { freq: 440, duration: 0.08 }],
  success: [
    { freq: 523, duration: 0.07 },
    { freq: 659, duration: 0.07 },
    { freq: 784, duration: 0.12 },
  ],
  wave: [{ freq: 784, duration: 0.05 }, { freq: 988, duration: 0.07 }],
  bloom: [
    { freq: 523, duration: 0.06 },
    { freq: 659, duration: 0.06 },
    { freq: 784, duration: 0.06 },
    { freq: 1047, duration: 0.14 },
  ],
  unlock: [
    { freq: 392, duration: 0.07 },
    { freq: 523, duration: 0.07 },
    { freq: 659, duration: 0.07 },
    { freq: 784, duration: 0.18 },
  ],
};

interface PlayOptions { force?: boolean }

interface AudioContextValue {
  muted: boolean;
  toggleMuted: () => void;
  play: (name: SfxName, options?: PlayOptions) => void;
}

const AudioCtx = createContext<AudioContextValue | null>(null);
const isBoolean = (value: unknown): value is boolean => typeof value === "boolean";

function playNotes(ctx: AudioContext, notes: Note[]) {
  let start = ctx.currentTime;
  for (const { freq, duration } of notes) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(VOLUME, start + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.02);
    start += duration;
  }
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useLocalStorage<boolean>("ovya:muted", false, isBoolean);
  const ctxRef = useRef<AudioContext | null>(null);
  const lastPlayed = useRef<Partial<Record<SfxName, number>>>({});

  const play = useCallback(
    (name: SfxName, options?: PlayOptions) => {
      if (muted && !options?.force) return;

      const now = performance.now();
      const last = lastPlayed.current[name] ?? -Infinity;
      if (now - last < MIN_GAP_MS) return;
      lastPlayed.current[name] = now;

      try {
        ctxRef.current ??= new window.AudioContext();
        const ctx = ctxRef.current;
        if (ctx.state === "suspended") void ctx.resume();
        playNotes(ctx, SFX[name]);
      } catch {
        /* Web Audio unsupported: stay silent */
      }
    },
    [muted],
  );

  const toggleMuted = useCallback(() => setMuted((current) => !current), [setMuted]);
  const value = useMemo(() => ({ muted, toggleMuted, play }), [muted, toggleMuted, play]);

  return <AudioCtx.Provider value={value}>{children}</AudioCtx.Provider>;
}

export function useAudio(): AudioContextValue {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used inside <AudioProvider>");
  return ctx;
}
