import { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { usePixelCursor } from "../../hooks/usePixelCursor";
import BottomNav from "../navigation/BottomNav";
import Taskbar from "../navigation/Taskbar";
import FunFactsEgg from "./FunFactsEgg";
import RouteAnnouncer from "./RouteAnnouncer";
import StartupScreen from "./StartupScreen";

export default function AppShell() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);
  usePixelCursor();

  // On route change: reset scroll and move focus to <main> (skipped on first load
  // so the skip link stays the first Tab stop)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    <>
      <StartupScreen />
      <FunFactsEgg />
      <RouteAnnouncer />
      <a href="#main" className="skip-link">Skip to content</a>
      <Taskbar />
      <BottomNav />
      <main id="main" tabIndex={-1} className="app-main">
        <Suspense fallback={<p className="pixel" role="status">Loading…</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}