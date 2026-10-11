// src/utils/text.ts
export const hasText = (value: string | null | undefined): value is string =>
  typeof value === "string" && value.trim().length > 0;