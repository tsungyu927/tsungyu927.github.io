"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

enum MenuKeys {
  Home = "HOME",
  Experience = "EXPERIENCE",
  Projects = "PROJECTS",
  Skills = "SKILLS",
  Contact = "CONTACT",
}

type MenuProps = {
  key: MenuKeys;
  title: string;
  path: string;
};

const MENU: MenuProps[] = [
  {
    key: MenuKeys.Home,
    title: "Home",
    path: "/",
  },
  {
    key: MenuKeys.Experience,
    title: "Experience",
    path: "/experience",
  },
  {
    key: MenuKeys.Projects,
    title: "Projects",
    path: "/projects",
  },
  {
    key: MenuKeys.Skills,
    title: "Skills",
    path: "/skills",
  },
  {
    key: MenuKeys.Contact,
    title: "Contact",
    path: "/contact",
  },
];

const Menubar = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="fixed z-50 top-10 right-1/2 w-fit translate-x-1/2 px-8 py-1.5 rounded-md border bg-background shadow-sm">
      <NavigationMenuList className="text-muted-foreground">
        {MENU.map((item) => (
          <NavigationMenuItem
            key={item.key}
            className={cn(
              "px-2 flex flex-col items-center gap-0.5 hover:text-primary",
              pathname === item.path && "text-primary"
            )}
          >
            <Link href={item.path} className="text-sm">
              {item.title}
            </Link>
            <div
              className={cn(
                "w-1 h-1 rounded-full bg-primary invisible",
                pathname === item.path && "visible"
              )}
            />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menubar;
