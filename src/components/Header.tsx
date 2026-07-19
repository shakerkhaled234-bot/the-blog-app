import { useState } from "react";
import { useBlog } from "../context/BlogContext";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  label: string;
  onClick: () => void;
  active: boolean;
}

export default function Header() {
  const { currentPage, goToHome, goToNewsletter } = useBlog();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Blog", onClick: goToHome, active: currentPage !== "newsletter" },
    { label: "Projects", onClick: () => {}, active: false },
    { label: "About", onClick: () => {}, active: false },
    {
      label: "Newsletter",
      onClick: goToNewsletter,
      active: currentPage === "newsletter",
    },
  ];

  return (
    <header className="border-b border-gray-200 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={goToHome}
          className="text-sm font-semibold text-gray-900 dark:text-white"
        >
          Your Name
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={item.onClick}
              className={`text-sm transition-colors ${
                item.active
                  ? "font-semibold text-gray-900 dark:text-white"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-center rounded-md text-gray-700 dark:text-gray-200 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray-200 px-4 py-3 dark:border-white/10 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                item.onClick();
                setMenuOpen(false);
              }}
              className={`rounded-md px-2 py-2 text-left text-sm ${
                item.active
                  ? "font-semibold text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="px-2 py-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
