import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AppShell from "./components/layout/AppShell";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Skills = lazy(() => import("./pages/Skills"));
const Journey = lazy(() => import("./pages/Journey"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="skills" element={<Skills />} />
        <Route path="journey" element={<Journey />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}