"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Switch } from "@/components/ui/switch";

enum ThemeOptions {
  Dark = "dark",
  Light = "light",
}

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  const handleThemeToggle = (isDark: boolean) => {
    setTheme(isDark ? ThemeOptions.Dark : ThemeOptions.Light);
  };

  return (
    <div className="fixed z-50 right-10 top-10 flex items-center gap-2">
      <Switch onCheckedChange={handleThemeToggle} />
      <MoonIcon className="hidden dark:block" />
      <SunIcon className="block dark:hidden" />
    </div>
  );
};

export default ThemeToggle;
