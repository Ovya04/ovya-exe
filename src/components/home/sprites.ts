// src/components/home/sprites.ts
import type { SpriteKey } from "../../data/homeObjects";
import type { SpriteDef } from "../../utils/sprite";

const o = "#443A52"; // outline

export const objectSprites: Record<SpriteKey, SpriteDef> = {
  laptop: {
    rows: [
      "..oooooooooo..",
      "..oBBBBBBBBo..",
      "..oBWWBBBBBo..",
      "..oBBBBpBBBo..",
      "..oBBBBBBBBo..",
      "..oooooooooo..",
      ".oLLLLLLLLLLo.",
      "oLLLLLLLLLLLLo",
      "oooooooooooooo",
    ],
    palette: { o, B: "#CBE4F6", W: "#FFFFFF", p: "#F6C8DC", L: "#DCCCF8" },
  },
  books: {
    rows: [
      ".oooooooooo.",
      ".oBBBBBBBBo.",
      ".oooooooooo.",
      "oooooooooo..",
      "oMMMMMMMMo..",
      "oooooooooo..",
      "..oooooooooo",
      "..oPPPPPPPPo",
      "..oooooooooo",
    ],
    palette: { o, B: "#CBE4F6", M: "#D8F0DF", P: "#F6C8DC" },
  },
  plant: {
    rows: [
      "...gg..gg...",
      "..gGGg.gGg..",
      "..gGGggGGg..",
      "...gGGGGg...",
      "....gGGg....",
      ".....gg.....",
      ".....gg.....",
      "..oooooooo..",
      "..oTTTTTTo..",
      "...oTTTTo...",
      "...oTTTTo...",
      "...oooooo...",
    ],
    palette: { o, g: "#8FC9A0", G: "#5FA97B", T: "#F6C8DC" },
  },
  trophy: {
    rows: [
      "..oooooooo..",
      ".oYYYYYYYYo.",
      "ooYWYYYYYYoo",
      "o.oYYYYYYo.o",
      ".oooYYYYooo.",
      "...oYYYYo...",
      "....oYYo....",
      ".....oo.....",
      "...oooooo...",
      "..oPPPPPPo..",
      "..oooooooo..",
    ],
    palette: { o, Y: "#FFE8A3", W: "#FFFFFF", P: "#F6C8DC" },
  },
  folder: {
    rows: [
      "ooooo.......",
      "oFFFFoooooo.",
      "oFFFFFFFFFFo",
      "oFFFFFFFFFFo",
      "oFFWWWWWWFFo",
      "oFFFFFFFFFFo",
      "oFFFFFFFFFFo",
      "oFFFFFFFFFFo",
      "oooooooooooo",
    ],
    palette: { o, F: "#F6C8DC", W: "#FFFFFF" },
  },
  envelope: {
    rows: [
      "oooooooooooo",
      "oWWWWWWWWWWo",
      "oWoWWWWWWoWo",
      "oWWoWWWWoWWo",
      "oWWWoWWoWWWo",
      "oWWWWooWWWWo",
      "oWWWWppWWWWo",
      "oWWWWWWWWWWo",
      "oooooooooooo",
    ],
    palette: { o, W: "#FFF7FB", p: "#F6C8DC" },
  },
};

export const cloudSprite: SpriteDef = {
  rows: [
    "....WWWW......",
    "..WWWWWWWW.WW.",
    ".WWWWWWWWWWWWW",
    "WWWWWWWWWWWWWW",
    ".WWWWWWWWWWWW.",
  ],
  palette: { W: "#FFFFFF" },
};

export const starSprite: SpriteDef = {
  rows: ["..Y..", ".YYY.", "YYYYY", ".YYY.", "..Y.."],
  palette: { Y: "#FFE8A3" },
};