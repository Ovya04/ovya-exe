export type NavIconName =
  | "Home" | "FolderOpen" | "Laptop" | "GraduationCap"
  | "Trophy" | "User" | "Mail" | "FileText";

export interface NavItem {
  path: string;
  label: string;
  icon: NavIconName;
  /** Rendered as a standalone shortcut in the taskbar tray */
  highlight?: boolean;
  /** Shown directly in the mobile bottom bar; the rest go under "More" */
  mobilePrimary?: boolean;
}

export const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: "Home", mobilePrimary: true },
  { path: "/projects", label: "Projects", icon: "FolderOpen", mobilePrimary: true },
  { path: "/skills", label: "Skills", icon: "Laptop" },
  { path: "/journey", label: "Journey", icon: "GraduationCap" },
  { path: "/achievements", label: "Achievements", icon: "Trophy" },
  { path: "/about", label: "About", icon: "User" },
  { path: "/resume", label: "Resume", icon: "FileText", highlight: true, mobilePrimary: true },
  { path: "/contact", label: "Contact", icon: "Mail", mobilePrimary: true },
];