"use client";

import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const isTheme = (value: string | null): value is Theme => value === "dark" || value === "light";

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getSnapshot() {
  const value = document.documentElement.getAttribute("data-theme");
  return isTheme(value) ? value : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("techcert-theme", next);
    } catch {
      /* storage blocked */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={next === "light" ? "라이트 모드로 전환" : "다크 모드로 전환"}
      title={next === "light" ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted hairline transition hover:bg-surface-hover hover:text-foreground"
    >
      {next === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
