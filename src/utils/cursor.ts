// src/utils/cursor.ts
import { spriteSize, spriteToRects, type SpriteDef } from "./sprite";

const SCALE = 2;

const o = "#443A52";

const arrow: SpriteDef = {
  rows: [
    "o..........",
    "oo.........",
    "oPo........",
    "oPPo.......",
    "oPPPo......",
    "oPPPPo.....",
    "oPPPPPo....",
    "oPPPPPPo...",
    "oPPPoooo...",
    "oPoPPo.....",
    "oo.oPPo....",
    "...oooo....",
  ],
  palette: { o, P: "#F6C8DC" },
};

const pointer: SpriteDef = {
  rows: [
    "....oo......",
    "...oYYo.....",
    "...oYYo.....",
    "...oYYoooo..",
    "...oYYoYYoo.",
    "oo.oYYoYYoYo",
    "oYooYYYYYYYo",
    "oYYoYYYYYYYo",
    ".oYYYYYYYYYo",
    "..oYYYYYYYYo",
    "..oYYYYYYYo.",
    "...oYYYYYYo.",
    "....oooooo..",
  ],
  palette: { o, Y: "#FFE8A3" },
};

function toCursorValue(sprite: SpriteDef, hotspot: { x: number; y: number }): string {
  const { width, height } = spriteSize(sprite.rows);
  const rects = spriteToRects(sprite)
    .map((r) => `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="1" fill="${r.color}"/>`)
    .join("");
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width * SCALE}" height="${height * SCALE}" ` +
    `viewBox="0 0 ${width} ${height}" shape-rendering="crispEdges">${rects}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${hotspot.x * SCALE} ${hotspot.y * SCALE}`;
}

export const cursorValues = {
  arrow: toCursorValue(arrow, { x: 0, y: 0 }),
  pointer: toCursorValue(pointer, { x: 4, y: 0 }),
};