// src/components/achievements/achievementSprites.ts
import type { AchievementIcon } from "../../types/content";
import type { SpriteDef } from "../../utils/sprite";
import { objectSprites } from "../home/sprites";

const o = "#443A52";

export const achievementSprites: Record<AchievementIcon, SpriteDef> = {
  trophy: objectSprites.trophy,
  patent: {
    rows: [
      "oooooooooooo",
      "oWWWWWWWWWWo",
      "oWbbbbbbbbWo",
      "oWWWWWWWWWWo",
      "oWbbbbbbbbWo",
      "oWWWWWWWWWWo",
      "oWbbbbbbWWWo",
      "oWWWWooWWWWo",
      "oWWWoYYoWWWo",
      "oWWWWooWWWWo",
      "oooooooooooo",
    ],
    palette: { o, W: "#FFF7FB", b: "#CBE4F6", Y: "#FFE8A3" },
  },
    medal: {
    rows: [
      "..oo....oo..",
      "..oBo..oBo..",
      "...oBooBo...",
      "....oBBo....",
      "...oooooo...",
      "..oYYYYYYo..",
      ".oYYWYYYYYo.",
      ".oYYYYYYYYo.",
      "..oYYYYYYo..",
      "...oooooo...",
    ],
    palette: { o, B: "#F6C8DC", Y: "#FFE8A3", W: "#FFFFFF" },
  },
  graduation: {
    rows: [
      ".....oo.....",
      "...ooLLoo...",
      ".ooLLLLLLoo.",
      "oLLLLLLLLLLo",
      ".ooLLLLLLooY",
      "..oBBBBBBo.Y",
      "..oBBBBBBo.Y",
      "...oooooo.YY",
    ],
    palette: { o, L: "#DCCCF8", B: "#F6C8DC", Y: "#FFE8A3" },
  },
  paper: {
    rows: [
      "oooooooooo",
      "oWWWWWWWWo",
      "oWppppppWo",
      "oWWWWWWWWo",
      "oWLLLLLLWo",
      "oWLLLLLLWo",
      "oWWWWWWWWo",
      "oWLLLLWWWo",
      "oWWWWWWWWo",
      "oooooooooo",
    ],
    palette: { o, W: "#FFF7FB", p: "#F6C8DC", L: "#DCCCF8" },
  },
};