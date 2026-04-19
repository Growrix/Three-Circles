const themeScript = `
(() => {
  try {
    const storageKey = "three-circles-theme";
    const stored = window.localStorage.getItem(storageKey);
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = stored === "dark" || stored === "light" ? stored : system;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "light";
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}