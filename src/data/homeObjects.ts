// src/data/homeObjects.ts
import type { WindowTone } from "../components/pixel-ui";

export type SpriteKey = "laptop" | "books" | "plant" | "trophy" | "folder" | "envelope";

export interface ObjectPosition {
  left: string;
  width: string;
  bottom: string;
}

export interface HomeObject {
  id: string;
  /** Always-visible tag, also the label on mobile */
  label: string;
  /** Shown on hover/focus as "[ hint ]" */
  hint: string;
  to: string;
  tone: WindowTone;
  sprite: SpriteKey;
  /** Percentages of the room (desktop scene only) */
  position: ObjectPosition;
}

export const homeObjects: HomeObject[] = [
  { id: "laptop", label: "Projects", hint: "inspect projects", to: "/projects", tone: "blue", sprite: "laptop",
    position: { left: "36%", width: "26%", bottom: "37.5%" } },
  { id: "folder", label: "Resume", hint: "open resume", to: "/resume", tone: "pink", sprite: "folder",
    position: { left: "66%", width: "13%", bottom: "37.5%" } },
  { id: "envelope", label: "Contact", hint: "send a message", to: "/contact", tone: "lavender", sprite: "envelope",
    position: { left: "25%", width: "9%", bottom: "37.5%" } },
  { id: "books", label: "Journey", hint: "read my journey", to: "/journey", tone: "mint", sprite: "books",
    position: { left: "59%", width: "12%", bottom: "66%" } },
  { id: "trophy", label: "Achievements", hint: "view trophies", to: "/achievements", tone: "yellow", sprite: "trophy",
    position: { left: "80%", width: "9%", bottom: "66%" } },
  { id: "plant", label: "About", hint: "meet Ovya", to: "/about", tone: "mint", sprite: "plant",
    position: { left: "84%", width: "12%", bottom: "6%" } },
];