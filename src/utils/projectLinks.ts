// src/utils/projectLinks.ts
import type { Project } from "../types/project";
import { hasText } from "./text";

export type ProjectLinkKind = "github" | "demo" | "download" | "external";

export interface ProjectLinkItem {
  id: string;
  label: string;
  href: string;
  kind: ProjectLinkKind;
}

export function getProjectLinks(project: Project): ProjectLinkItem[] {
  const items: ProjectLinkItem[] = [];
  if (hasText(project.demo)) items.push({ id: "demo", label: "Demo", href: project.demo, kind: "demo" });
  if (hasText(project.github)) items.push({ id: "github", label: "GitHub", href: project.github, kind: "github" });
  project.links?.forEach((link, index) => {
    if (hasText(link.href)) {
      items.push({ id: `link-${index}`, label: link.label, href: link.href, kind: link.kind ?? "external" });
    }
  });
  return items;
}