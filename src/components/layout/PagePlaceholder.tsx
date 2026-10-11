// src/components/layout/PagePlaceholder.tsx
interface Props { title: string; phase: string }

export default function PagePlaceholder({ title, phase }: Props) {
  return (
    <section aria-labelledby="page-title">
      <h1 id="page-title" className="pixel">{title}</h1>
      <p>TODO: built in {phase}.</p>
    </section>
  );
}