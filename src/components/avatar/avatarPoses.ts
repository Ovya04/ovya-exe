// src/components/avatar/avatarPoses.ts
import type { SpriteDef } from "../../utils/sprite";

export type AvatarPose = "idle" | "laptop" | "book" | "trophy";

export interface PoseProp {
  sprite: SpriteDef;
  /** Position in avatar pixel units (the avatar is 14 x 18) */
  x: number;
  y: number;
  /** Hide the waving arm (it is behind the prop) */
  hideArm?: boolean;
}

const o = "#443A52";

export const poseProps: Record<Exclude<AvatarPose, "idle">, PoseProp> = {
  // Back of a laptop lid covering her lower half: she's sitting behind it
  laptop: {
    x: 0,
    y: 11,
    hideArm: true,
    sprite: {
      rows: [
        "..oooooooooo..",
        "..oLLLLLLLLo..",
        "..oLLLLpLLLo..",
        "..oLLLLLLLLo..",
        "..oooooooooo..",
        ".oLLLLLLLLLLo.",
        "oooooooooooooo",
      ],
      palette: { o, L: "#DCCCF8", p: "#F6C8DC" },
    },
  },
  // A book held at chest height
  book: {
    x: 3,
    y: 10,
    sprite: {
      rows: [
        "oooooooo",
        "oBBBBBBo",
        "oBYYYYBo",
        "oBBBBBBo",
        "oooooooo",
      ],
      palette: { o, B: "#CBE4F6", Y: "#FFE8A3" },
    },
  },
  // A small trophy raised in her right hand
  trophy: {
    x: 11,
    y: 7,
    sprite: {
      rows: [
        "oYYYo",
        "oYYYo",
        ".oYo.",
        "..o..",
        ".ooo.",
      ],
      palette: { o, Y: "#FFE8A3" },
    },
  },
};