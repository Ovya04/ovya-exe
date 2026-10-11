// src/pages/Skills.tsx  (replace the placeholder)
import SkillInventory from "../components/skills/SkillInventory";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Skills() {
  useDocumentTitle("Skills");
  return <SkillInventory />;
}