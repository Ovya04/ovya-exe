// src/components/projects/CaseStudy.tsx
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { projects } from "../../data/projects";
import type { LabelValue, Project } from "../../types/project";
import { hasText } from "../../utils/text";
import { PixelButton, PixelWindow } from "../pixel-ui";
import styles from "./CaseStudy.module.css";
import CaseStudySection from "./CaseStudySection";
import ProjectCartridge from "./ProjectCartridge";
import Prose from "./Prose";
import TechTags from "./TechTags";

interface Block {
  id: string;
  title: string;
  content: ReactNode;
}

function Overview({ project }: { project: Project }) {
  const { description, summary, features, facts } = project;
  return (
    <>
      <Prose text={hasText(description) ? description : summary} />
      {features && features.length > 0 && (
        <>
          <h3 className={styles.subheading}>Key features</h3>
          <ul className={styles.list}>
            {features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </>
      )}
      {facts && facts.length > 0 && (
        <dl className={styles.facts}>
          {facts.map(({ label, value }) => (
            <div key={label} className={styles.fact}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );
}

function Results({ text, metrics }: { text?: string; metrics?: LabelValue[] }) {
  return (
    <>
      {hasText(text) && <Prose text={text} />}
      {metrics && metrics.length > 0 && (
        <ul className={styles.metrics}>
          {metrics.map(({ label, value }) => (
            <li key={label} className={styles.metric}>
              <span className={styles.metricValue}>{value}</span>
              <span className={styles.metricLabel}>{label}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

/** Only sections that actually have content are returned. Numbering follows what's shown. */
function buildBlocks(project: Project): Block[] {
  const sections = project.sections ?? {};
  const blocks: Array<Block | null> = [
    { id: "overview", title: "Overview", content: <Overview project={project} /> },
    hasText(sections.problem)
      ? { id: "problem", title: "The Problem", content: <Prose text={sections.problem} /> }
      : null,
    hasText(sections.approach)
      ? { id: "approach", title: "My Approach", content: <Prose text={sections.approach} /> }
      : null,
    project.techStack.length > 0
      ? { id: "tech", title: "Tech Stack", content: <TechTags tags={project.techStack} /> }
      : null,
    hasText(sections.architecture)
      ? { id: "architecture", title: "Architecture", content: <Prose text={sections.architecture} /> }
      : null,
    hasText(sections.challenges)
      ? { id: "challenges", title: "Challenges", content: <Prose text={sections.challenges} /> }
      : null,
    hasText(sections.results) || (project.metrics && project.metrics.length > 0)
      ? { id: "results", title: "Results", content: <Results text={sections.results} metrics={project.metrics} /> }
      : null,
    hasText(sections.learnings)
      ? { id: "learnings", title: "What I Learned", content: <Prose text={sections.learnings} /> }
      : null,
  ];
  return blocks.filter((block): block is Block => block !== null);
}

export default function CaseStudy({ project }: { project: Project }) {
  const blocks = buildBlocks(project);
  const position = projects.findIndex((item) => item.id === project.id);
  const previous = projects[position - 1];
  const next = projects[position + 1];

  return (
    <div className={styles.layout}>
      <div className={styles.aside}>
        <div>
          <PixelButton to="/projects" size="sm" variant="ghost" icon={<ArrowLeft size={16} />}>
            All projects
          </PixelButton>
        </div>
        <ProjectCartridge project={project} />
      </div>

      <div className={styles.content}>
        {hasText(project.todo) && (
          <aside className={styles.todo} role="note">
            <span className={styles.todoBadge}>WIP</span>
            <span>{project.todo}</span>
          </aside>
        )}

        <PixelWindow
          title="CASE_STUDY.md"
          titleAs="p"
          tone={project.category === "ai-ml" ? "lavender" : "blue"}
        >
          {blocks.map((block, index) => (
            <CaseStudySection key={block.id} index={index + 1} title={block.title}>
              {block.content}
            </CaseStudySection>
          ))}
        </PixelWindow>

        <nav className={styles.pager} aria-label="More projects">
          {previous && (
            <PixelButton to={`/projects/${previous.id}`} size="sm" variant="ghost" icon={<ArrowLeft size={16} />}>
              {previous.title}
            </PixelButton>
          )}
          {next && (
            <PixelButton
              to={`/projects/${next.id}`}
              size="sm"
              variant="ghost"
              icon={<ArrowRight size={16} />}
              className={styles.next}
            >
              {next.title}
            </PixelButton>
          )}
        </nav>
      </div>
    </div>
  );
}