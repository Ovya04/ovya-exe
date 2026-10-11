// src/components/layout/RouteAnnouncer.tsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/** Tells screen-reader users that the "page" changed, since SPAs don't reload. */
export default function RouteAnnouncer() {
  const { pathname } = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const id = window.setTimeout(() => setMessage(`${document.title} loaded`), 300);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return <p className="sr-only" role="status" aria-live="polite">{message}</p>;
}