import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) return null;

  const isDarkMode = resolvedTheme === "dark";

  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleTheme}
      className={`${
        isDarkMode ? "bg-[#a056ee]" : "bg-gray-200"
      } relative inline-flex h-5 w-10 items-center rounded-full`}
    >
      <span className="sr-only">Toggle Theme</span>
      <span
        className={`${
          isDarkMode ? "translate-x-4" : "translate-x-0"
        } transition inline-block h-6 w-6 transform rounded-full bg-white border border-gray-400`}
      >
        <span aria-label="theme-emoji" role="img">
          {isDarkMode ? "🌙" : "🌞"}
        </span>
      </span>
    </Switch>
  );
}
