"use client";

import { useEffect, useState } from "react";

const storageKey = "three-circles-theme";

type ThemeMode = "light" | "dark";

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem(storageKey, theme);
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const rootTheme = document.documentElement.dataset.theme;
    const resolvedTheme = rootTheme === "dark" ? "dark" : "light";
    setTheme(resolvedTheme);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={mounted && theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={mounted && theme === "dark"}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__icon" aria-hidden="true">
          {mounted && theme === "dark" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M12 3v2.25M12 18.75V21M3 12h2.25M18.75 12H21M5.64 5.64l1.59 1.59M16.77 16.77l1.59 1.59M5.64 18.36l1.59-1.59M16.77 7.23l1.59-1.59" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="4.25" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M21 12.79A9 9 0 0 1 11.21 3c0 .58-.11 1.16-.33 1.7A7.5 7.5 0 1 0 19.3 13.12c.54-.22 1.12-.33 1.7-.33Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </span>
      <span className="theme-toggle__label">{mounted && theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}