// src/components/projects/Prose.tsx
/** Renders text with blank-line-separated paragraphs, so data strings can contain several. */
export default function Prose({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n{2,}/).map((paragraph, index) => (
        <p key={index}>{paragraph.trim()}</p>
      ))}
    </>
  );
}