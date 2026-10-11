import type { SkillCategory } from "../types/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      {
        id: "python",
        name: "Python",
        extraUsedIn: ["ML pipelines", "Automation", "FastAPI projects"],
        courseIds: ["python", "mad1", "mad2", "mlp", "tds"],
      },
      { id: "csharp", name: "C#" },
      { id: "cpp", name: "C++" },
      { id: "javascript", name: "JavaScript", courseIds: ["mad2"] },
      { id: "sql", name: "SQL", aliases: ["PostgreSQL", "SQLite"], courseIds: ["dbms"] },
    ],
  },
  {
    id: "web",
    title: "Web & Backend",
    skills: [
      { id: "react", name: "React" },
      { id: "vue", name: "Vue", courseIds: ["mad2"] },
      { id: "nodejs", name: "Node.js", aliases: ["Node"] },
      { id: "express", name: "Express" },
      { id: "flask", name: "Flask", courseIds: ["mad1", "mad2"] },
      { id: "fastapi", name: "FastAPI" },
      { id: "celery", name: "Celery", courseIds: ["mad2"] },
      { id: "telegram", name: "Telegram Bots", aliases: ["Telegram"], courseIds: ["tds"] },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { id: "postgresql", name: "PostgreSQL", courseIds: ["mad1"] },
      { id: "sqlite", name: "SQLite", glyph: "SL", courseIds: ["mad2"] },
      { id: "mongodb", name: "MongoDB" },
      { id: "redis", name: "Redis", courseIds: ["mad2"] },
    ],
  },
  {
    id: "ai-ml-data",
    title: "AI / ML / Data",
    skills: [
      { id: "pandas", name: "Pandas", courseIds: ["mlp", "tds"] },
      { id: "numpy", name: "NumPy", courseIds: ["mlp"] },
      { id: "scikit-learn", name: "Scikit-learn", courseIds: ["mlt", "mlp"] },
      { id: "lightgbm", name: "LightGBM", courseIds: ["mlp"] },
      { id: "xgboost", name: "XGBoost", courseIds: ["mlp"] },
      { id: "opencv", name: "OpenCV" },
      { id: "mediapipe", name: "MediaPipe", aliases: ["MediaPipe Hands"] },
      { id: "lstm", name: "LSTM" },
      { id: "vosk", name: "VOSK" },
      { id: "llm-agents", name: "LLM Agents", aliases: ["LLM Agent"], courseIds: ["tds"] },
      { id: "conversational-ai", name: "Conversational AI" },
    ],
  },
  {
    id: "tools",
    title: "Tools / Platforms",
    skills: [
      { id: "git", name: "Git" },
      { id: "aws", name: "AWS" },
      { id: "streamlit", name: "Streamlit" },
      { id: "selenium", name: "Selenium" },
      { id: "pyautogui", name: "PyAutoGUI" },
      { id: "wpf", name: "WPF" },
      { id: "dotnet", name: ".NET", glyph: "NET" },
      { id: "figma", name: "Figma" },
    ],
  },
];