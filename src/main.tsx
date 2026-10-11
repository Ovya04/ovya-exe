import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AudioProvider } from "./contexts/AudioContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/global.css";
import { LazyMotion, domAnimation } from "framer-motion";
// ...
<MotionConfig reducedMotion="user">
  <LazyMotion features={domAnimation}>
    <ThemeProvider>
      <AudioProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AudioProvider>
    </ThemeProvider>
  </LazyMotion>
</MotionConfig>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <AudioProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AudioProvider>
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>,
);