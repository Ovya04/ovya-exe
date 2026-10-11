// src/components/about/interestSprites.ts
import type { InterestIcon } from "../../data/about";
import type { SpriteDef } from "../../utils/sprite";

const o = "#443A52";

export const interestSprites: Record<InterestIcon, SpriteDef> = {
  music: {
    rows: [
      "...oooooo",
      "...oPPPPo",
      "...o....o",
      "...o....o",
      "...o....o",
      "oooo.oooo",
      "oPPo.oPPo",
      "oooo.oooo",
    ],
    palette: { o, P: "#F6C8DC" },
  },
  writing: {
    rows: [
      "......ooo",
      ".....oYYo",
      "....oYYo.",
      "...oYYo..",
      "..oYYo...",
      ".oYYo....",
      "oPPo.....",
      "ooo......",
    ],
    palette: { o, Y: "#FFE8A3", P: "#F6C8DC" },
  },
  editorial: {
    rows: [
      "ooooooooo",
      "oPPPPPPPo",
      "oPWWWWWPo",
      "oPWBBBWPo",
      "oPWBBBWPo",
      "oPWWWWWPo",
      "oPooooPPo",
      "oPPPPPPPo",
      "ooooooooo",
    ],
    palette: { o, P: "#F6C8DC", W: "#FFF7FB", B: "#CBE4F6" },
  },
  events: {
    rows: [
      "ooooooooo",
      "oBBBBBBBo",
      "ooooooooo",
      "oWWWWWWWo",
      "oWpWpWpWo",
      "oWWWWWWWo",
      "oWpWpWWWo",
      "oWWWWWWWo",
      "ooooooooo",
    ],
    palette: { o, B: "#CBE4F6", W: "#FFF7FB", p: "#F6C8DC" },
  },
  emcee: {
    rows: [
      "..ooooo..",
      ".oLLLLLo.",
      ".oLWLLLo.",
      ".oLLLLLo.",
      ".oLLLLLo.",
      "..ooooo..",
      "....o....",
      "....o....",
      "..ooooo..",
    ],
    palette: { o, L: "#DCCCF8", W: "#FFFFFF" },
  },
    dance: {
    rows: [
      "o..ooo..o",
      "oo.oSo.oo",
      ".ooSSSoo.",
      "..oSSSo..",
      "...ooo...",
      "..oPPPo..",
      ".oPPPPPo.",
      "..oLoLo..",
      "..oo.oo..",
    ],
    palette: { o, S: "#A8704B", P: "#F6C8DC", L: "#DCCCF8" },
  },
};