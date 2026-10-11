// src/pages/ProjectDetail.tsx  (replace the Phase 1 placeholder)
import { useParams } from "react-router-dom";
import CaseStudy from "../components/projects/CaseStudy";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { getProjectBySlug } from "../utils/projects";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);
  useDocumentTitle(project?.title);

  if (!project) return <NotFound />;
  return <CaseStudy project={project} />;
}