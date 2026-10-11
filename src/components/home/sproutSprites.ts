// src/components/home/sproutSprites.ts
import type { SpriteDef } from "../../utils/sprite";

const palette = { o: "#443A52", g: "#8FC9A0", G: "#5FA97B", p: "#F6C8DC", Y: "#FFE8A3", T: "#F6C8DC" };
const pot = ["oooooooo", "oTTTTTTo", ".oTTTTo.", ".oooooo."];

/** Stage 0: tiny sprout · 1: leafy · 2: flower */
export const sproutSprites: SpriteDef[] = [
  { rows: ["........", "........", "...g.g..", "....gg..", "....g...", ...pot], palette },
  { rows: ["........", "..gg.gg.", "..gGgGg.", "...gGg..", "....g...", ...pot], palette },
  { rows: ["...pp...", "..pYYp..", "...pp...", "..gGgG..", "....g...", ...pot], palette },
];