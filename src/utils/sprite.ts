// src/utils/sprite.ts
export interface SpriteDef {
  /** One string per pixel row. "." (or any char missing from the palette) is transparent. */
  rows: string[];
  palette: Record<string, string>;
}

export interface SpriteRect {
  x: number;
  y: number;
  w: number;
  color: string;
  key: string;
}

export const spriteSize = (rows: string[]) => ({
  width: Math.max(...rows.map((row) => row.length)),
  height: rows.length,
});

/** Merges horizontal runs of the same colour into single rects. */
export function spriteToRects({ rows, palette }: SpriteDef): SpriteRect[] {
  const rects: SpriteRect[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const key = row[x];
      const color = palette[key];
      if (!color) {
        x += 1;
        continue;
      }
      let w = 1;
      while (x + w < row.length && row[x + w] === key) w += 1;
      rects.push({ x, y, w, color, key });
      x += w;
    }
  });
  return rects;
}