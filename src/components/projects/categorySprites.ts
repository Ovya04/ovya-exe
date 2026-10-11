// src/components/projects/categorySprites.ts
import type { ProjectCategory } from "../../types/project";
import type { SpriteDef } from "../../utils/sprite";

const o = "#443A52";

/** Fallback thumbnail art when a project has no `image`. */
export const categorySprites: Record<ProjectCategory, SpriteDef> = {
  development: {
    rows: [
      "oooooooooooo",
      "oBBBBBBBBpyo",
      "oooooooooooo",
      "oWWWWWWWWWWo",
      "oWWWgWWWgWWo",
      "oWWgWWpWWgWo",
      "oWWWgWWWgWWo",
      "oWWWWWWWWWWo",
      "oooooooooooo",
    ],
    palette: { o, B: "#CBE4F6", p: "#F6C8DC", y: "#FFE8A3", W: "#FFF7FB", g: "#5FA97B" },
  },
  "ai-ml": {
    rows: [
      "...o.o.o...",
      ".ooooooooo.",
      ".oLLLLLLLo.",
      "ooLLpLpLLoo",
      ".oLLLLLLLo.",
      "ooLLpLpLLoo",
      ".oLLLLLLLo.",
      ".ooooooooo.",
      "...o.o.o...",
    ],
    palette: { o, L: "#DCCCF8", p: "#F6C8DC" },
  },
};