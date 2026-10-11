// src/pages/Resume.tsx  (replace the placeholder)
import ResumeSelector from "../components/resume/ResumeSelector";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Resume() {
  useDocumentTitle("Resume");
  return <ResumeSelector />;
}