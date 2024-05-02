"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Switch } from "@/components/ui/switch";

enum ThemeOptions {
  Dark = "dark",
  Light = "light",
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeToggle = (isDark: boolean) => {
    const value = isDark ? ThemeOptions.Dark : ThemeOptions.Light;

    setTheme(value);
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="fixed z-50 right-10 top-10 flex items-center gap-2">
      <Switch
        checked={theme === ThemeOptions.Dark}
        onCheckedChange={handleThemeToggle}
      />
      <MoonIcon className="hidden dark:block" />
      <SunIcon className="block dark:hidden" />
    </div>
  );
};

export default ThemeToggle;
