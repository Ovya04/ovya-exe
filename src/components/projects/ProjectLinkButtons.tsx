// src/components/projects/ProjectLinkButtons.tsx
import { Code, Download, ExternalLink } from "lucide-react";
import type { Project } from "../../types/project";
import { getProjectLinks, type ProjectLinkKind } from "../../utils/projectLinks";
import { PixelButton } from "../pixel-ui";

const config = {
  github: { Icon: Code, variant: "ghost" },
  demo: { Icon: ExternalLink, variant: "secondary" },
  download: { Icon: Download, variant: "accent" },
  external: { Icon: ExternalLink, variant: "ghost" },
} as const satisfies Record<ProjectLinkKind, { Icon: typeof Code; variant: "ghost" | "secondary" | "accent" }>;

export default function ProjectLinkButtons({ project }: { project: Project }) {
  return (
    <>
      {getProjectLinks(project).map((link) => {
        const { Icon, variant } = config[link.kind];
        return (
          <PixelButton
            key={link.id}
            href={link.href}
            external
            size="sm"
            variant={variant}
            icon={<Icon size={16} />}
            aria-label={`${link.label}: ${project.title} (opens in new tab)`}
          >
            {link.label}
          </PixelButton>
        );
      })}
    </>
  );
}