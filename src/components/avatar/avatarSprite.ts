// src/components/avatar/avatarSprite.ts
import type { SpriteDef } from "../../utils/sprite";

const SKIN = "#A8704B";

export const avatarSprite: SpriteDef = {
  rows: [
    "....HHHHHH....",
    "...HHHHHHHH...",
    "..HHHHHHHHHH..",
    "..HHSSSSSSHHPH",
    "..HSSSSSSSSHHH",
    "..HSSSSSSSSHH.",
    "..HSCSSSSCSH.H",
    "...SSSMMSSS...",
    "....SSSSSS....",
    ".....DSSD.....",
    "...TTTTTTTT...",
    "..STTTTTTTTR..",
    "..STTTTTTTTR..",
    "..SKKKKKKKKR..",
    "..KKKKKKKKKK..",
    "....SS..SS....",
    "....SS..SS....",
    "...BBB..BBB...",
  ],
  palette: {
    H: "#2B2233", // hair
    P: "#F6C8DC", // hair tie
    S: SKIN,
    R: SKIN,      // right arm (animated layer)
    D: "#8A5535", // neck shadow
    C: "#C9787F", // blush
    M: "#6E3040", // mouth
    T: "#C9B6F2", // top
    K: "#F6C8DC", // skirt
    B: "#443A52", // shoes
  },
};

export const AVATAR_EYES = [{ x: 4, y: 5 }, { x: 9, y: 5 }];
export const AVATAR_EYE_COLOR = "#2B2233";