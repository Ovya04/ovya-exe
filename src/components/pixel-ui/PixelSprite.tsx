// src/components/pixel-ui/PixelSprite.tsx
import { useMemo } from "react";
import { spriteSize, spriteToRects, type SpriteDef } from "../../utils/sprite";

interface PixelSpriteProps extends SpriteDef {
  className?: string;
  /** Provide for meaningful art. Omit for decoration (hidden from screen readers). */
  label?: string;
}

export default function PixelSprite({ rows, palette, className, label }: PixelSpriteProps) {
  const rects = useMemo(() => spriteToRects({ rows, palette }), [rows, palette]);
  const { width, height } = spriteSize(rows);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      focusable="false"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {rects.map((rect, index) => (
        <rect key={index} x={rect.x} y={rect.y} width={rect.w} height={1} style={{ fill: rect.color }} />
      ))}
    </svg>
  );
}