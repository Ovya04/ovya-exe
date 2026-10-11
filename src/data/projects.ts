// src/data/projects.ts
import type { Project, ProjectCategory } from "../types/project";

export const categoryMeta: Record<ProjectCategory, { label: string }> = {
  development: { label: "Development" },
  "ai-ml": { label: "AI / ML / Data" },
};

/**
 * ADD A PROJECT: append an object to this array. Cards, filters, featured list,
 * the /projects/:id route and the case study page are all generated from it.
 */
export const projects: Project[] = [
  // ───────────── DEVELOPMENT ─────────────
  {
    id: "catinspect",
    title: "CatInspect",
    shortTitle: "Vehicle Inspection Platform",
    category: "development",
    typeLabel: "Full-Stack (MERN)",
    featured: true,
    featuredOrder: 4,
    status: "Caterpillar Hackathon",
    summary: "A full-stack vehicle inspection platform built with the MERN stack for a Caterpillar hackathon.",
    description:
      "A full-stack vehicle inspection platform built for a Caterpillar hackathon, using the MERN stack: MongoDB, Express, React and Node.js.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/catinspect.jpg",
    github: "https://github.com/Ovya04/vehicle-inspection-app",
    demo: "https://vehicle-inspection-d0jqgfigg-ovya-anands-projects.vercel.app/",
  },
  {
    id: "placement-portal",
    title: "Placement Portal",
    category: "development",
    typeLabel: "Web App (Flask)",
    status: "IIT Madras MAD1",
    summary: "A placement portal built with Flask and PostgreSQL for the IIT Madras MAD1 project.",
    description:
      "A placement portal built for the IIT Madras MAD1 project, using Flask as the backend framework with a PostgreSQL database.",
    techStack: ["Python", "Flask", "PostgreSQL"],
    image: "/projects/placement-portal.jpg",
    github: "https://github.com/Ovya04/placement-portal",
    demo: "https://placement-portal-2vsq.onrender.com/",
    sections: {
      architecture:
        "The backend is built with Flask using a modular, blueprint-based architecture, backed by a PostgreSQL database.",
    },
  },
  {
    id: "trek-app",
    title: "Trek App",
    category: "development",
    typeLabel: "Web App (Vue + Flask)",
    status: "IIT Madras MAD2",
    summary: "A trek management web app built with Vue and Flask, using Redis and Celery for caching and background work.",
    description:
      "A trek management web app built for the IIT Madras MAD2 project. The front end is built with Vue and the backend with Python and Flask, with SQLite for storage. Redis and Celery handle caching and background work.",
    techStack: ["Vue", "Python", "Flask", "Redis", "Celery", "SQLite"],
    image: "/projects/trek-app.jpg",
    github: "https://github.com/Ovya04/trekking_management_app",
    demo: "https://managetreksbyo.netlify.app",
  },
  {
    id: "desktop-trinket",
    title: "Desktop Trinket",
    shortTitle: "Hanging Desktop Charm",
    category: "development",
    typeLabel: "Windows Desktop App",
    featured: true,
    featuredOrder: 3,
    summary:
      "A Windows desktop utility with an interactive charm that hangs from the edge of your desktop, driven by real rope physics.",
    techStack: ["C#", "WPF", ".NET", "Physics Simulation"],
    features: [
      "Real rope physics using Verlet integration",
      "Multiple charms",
      "Customization",
      "Native Windows desktop application",
    ],
    image: "/projects/desktop-trinket.jpg",
    github: "https://github.com/Ovya04/O-sDesktop_Trinket",
    links: [
      {
        label: "Download",
        href: "https://github.com/Ovya04/O-sDesktop_Trinket/releases/tag/v1.0.0",
        kind: "download",
      },
    ],
  },
  {
    id: "telegram-data-analysis-bot",
    title: "Telegram Data Analysis Bot",
    shortTitle: "Data Analysis Chatbot",
    category: "development",
    typeLabel: "LLM Agent",
    featured: true,
    featuredOrder: 2,
    summary:
      "An LLM agent on Telegram that answers data-analysis questions about public datasets such as MOSPI data.",
    description:
      "An LLM agent, reachable via Telegram, that answers data-analysis questions about MOSPI and similar public datasets. It replies with a single JSON object containing the answer and a link to a public run log.",
    techStack: ["Telegram", "LLM Agent"],
    features: [
      "Answers data-analysis questions on MOSPI and similar public datasets",
      "Replies with a single JSON object",
      "Links to a public run log for each answer",
    ],
    image: "/projects/telegram-data-analysis-bot.jpg",
    github: "https://github.com/Ovya04/tds-databot",
    demo: "https://t.me/O1154_bot",
  },

  // ───────────── AI / ML / DATA ─────────────
  {
    id: "touchless-hci",
    title: "Touchless HCI",
    shortTitle: "Gesture + Voice Mouse",
    category: "ai-ml",
    typeLabel: "AI / HCI",
    featured: true,
    featuredOrder: 1,
    year: "2026",
    status: "Patent Filed",
    summary:
      "Real-time touchless human-computer interaction system combining hand gestures and offline voice commands for computer control.",
    description:
      "A real-time touchless human-computer interaction system that combines hand gestures with offline voice commands to control a computer, with gesture-only, voice-only and combined modes.",
    techStack: ["Python", "OpenCV", "MediaPipe Hands", "PyAutoGUI", "VOSK", "PyAudio", "SQLite"],
    features: [
      "Cursor control",
      "Click gestures",
      "Scrolling",
      "PPT controls",
      "Typing",
      "Application launching",
      "Voice commands",
      "Gesture-only mode",
      "Voice-only mode",
      "Combined mode",
      "Authentication system",
    ],
    image: "/projects/touchless-hci.jpg",
    metrics: [
      { label: "Gesture accuracy", value: "~84–92%" },
      { label: "Latency", value: "~150–250 ms" },
      { label: "Voice accuracy", value: ">80%" },
    ],
    
    github: "https://github.com/Ovya04/gesturevoice_mouse",
  },
  {
    id: "kaggle-comment-category-prediction",
    title: "Kaggle Comment Category Prediction",
    shortTitle: "Kaggle Classification",
    category: "ai-ml",
    typeLabel: "ML Classification",
    summary:
      "Machine learning classification project for predicting comment categories, using TF-IDF features with LightGBM, XGBoost, Random Forest and Logistic Regression.",
    techStack: [
      "Python", "Pandas", "NumPy", "Scikit-learn", "LightGBM",
      "XGBoost", "Random Forest", "Logistic Regression", "TF-IDF",
    ],
    github: "https://github.com/Ovya04/Comment-Category-prediction-22f3001028",
    links: [
      {
        label: "Kaggle",
        href: "https://www.kaggle.com/competitions/comment-category-prediction-challenge",
      },
    ],
    image: "/projects/kaggle-comment-category-prediction.jpg"
  },
  {
    id: "healthcare-chatbot",
    title: "ChatCare",
    shortTitle: "Healthcare Chatbot",
    category: "ai-ml",
    typeLabel: "Conversational AI",
    status: "Paper Published",
    image: "/projects/healthcare-chatbot.jpg",
    summary: "An interactive healthcare chatbot built on conversational AI, published as a research paper.",
    description:
      "ChatCare is an interactive healthcare chatbot built with conversational AI. The work was published as a research paper titled “ChatCare: An Interactive Chatbot Using Conversational AI”.",
    techStack: ["Conversational AI"],
    links: [
      {
        label: "Paper",
        href: "https://www.researchgate.net/publication/393324516_Chatcare_An_Interactive_Chatbot_Using_Conversational_AI",
      },
    ],
  },
  {
    id: "flight-schedule-optimization",
    title: "Flight Schedule Optimization",
    category: "ai-ml",
    summary:
      "Flight schedule optimization project built with Python and Streamlit, using Selenium web scraping to collect and process flight data.",
    techStack: ["Python", "Streamlit", "Selenium", "Web Scraping"],
    features: ["Flight data scraping", "Flight data processing"],
    image: "/projects/flight-schedule-optimization.jpg",
    github: "https://github.com/Ovya04/flight-schedule-optimization-full",
  },
  {
    id: "sentinel-2-time-series",
    title: "Sentinel-2 Time Series",
    category: "ai-ml",
    typeLabel: "Remote Sensing / Deep Learning",
    status: "InLab Internship",
    summary: "LSTM-based time-series prediction on Sentinel-2 satellite imagery from 2019 to 2024, done as an InLab internship project.",
    image: "/projects/sentinel-2-time-series.jpg",
    description:
      "An LSTM-based time-series prediction project on Sentinel-2 satellite imagery from 2019 to 2024, done as an internship project at InLab. The full project report is linked below.",
    techStack: ["Python", "LSTM", "Sentinel-2", "Time-Series Prediction"],
    facts: [
      { label: "Data range", value: "2019–2024" },
      { label: "Bands", value: "B02, B03, B04, B08" },
    ],
    metrics: [
      { label: "Test loss", value: "0.000328" },
      { label: "MAE", value: "0.0100" },
      { label: "RMSE", value: "0.0182" },
    ],
    links: [
      {
        label: "Report",
        href: "https://drive.google.com/file/d/1LpynODlWGiH3WHN-U9khe9xJ0UdK1l8C/view?usp=sharing",
      },
    ],
  },
];