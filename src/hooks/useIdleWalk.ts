// src/hooks/useIdleWalk.ts
import { useEffect, useState } from "react";

const WALK_MS = 2200; // keep in sync with the transition in Room.module.css

export interface WalkState {
  /** translateX in percent of the avatar's own width */
  offset: number;
  walking: boolean;
  flipped: boolean;
}

const IDLE: WalkState = { offset: 0, walking: false, flipped: false };

export function useIdleWalk(enabled: boolean, maxOffset: number): WalkState {
  const [state, setState] = useState<WalkState>(IDLE);

  useEffect(() => {
    if (!enabled) return;

    let timer: number | undefined;
    let offset = 0;

    const scheduleNext = () => {
      timer = window.setTimeout(startWalk, 5000 + Math.random() * 5000);
    };

    const startWalk = () => {
      if (document.hidden) {
        scheduleNext();
        return;
      }
      const target = offset === 0 ? Math.round(maxOffset * (0.5 + Math.random() * 0.5)) : 0;
      setState({ offset: target, walking: true, flipped: target < offset });
      offset = target;
      timer = window.setTimeout(() => {
        setState((current) => ({ ...current, walking: false, flipped: false }));
        scheduleNext();
      }, WALK_MS);
    };

    scheduleNext();
    return () => window.clearTimeout(timer);
  }, [enabled, maxOffset]);

  return enabled ? state : IDLE;
}