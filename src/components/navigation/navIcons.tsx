// src/components/navigation/navIcons.tsx
import { FileText, FolderOpen, GraduationCap, Home, Laptop, Mail, Trophy, User, type LucideIcon } from "lucide-react";
import type { NavIconName } from "../../data/navigation";

export const navIcons: Record<NavIconName, LucideIcon> = {
  Home, FolderOpen, Laptop, GraduationCap, Trophy, User, Mail, FileText,
};