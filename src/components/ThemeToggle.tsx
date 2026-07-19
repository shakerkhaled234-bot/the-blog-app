import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-gray-200 transition-colors dark:bg-white/20"
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform dark:bg-ink-950 ${
          isDark ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}
