"use client";

import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link, useLocation } from "react-router-dom";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant?: "default" | "ghost";
    to: string;
    adminOnly?:boolean
    userOnly?:boolean
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const routeLocation = useLocation().pathname;
  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex lg:flex-col flex-row gap-4 py-2 data-[collapsed=true]:py-2 transition-all "
      >
        <nav className="lg:grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to={link.to}
                    className={cn(
                      buttonVariants({
                        variant:
                          routeLocation === link.to ? "default" : "ghost",
                        size: "sm",
                      }),
                      "h-9 w-9",
                      link.variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={index}
                to={link.to}
                className={cn(
                  buttonVariants({
                    variant: routeLocation === link.to ? "default" : "ghost",
                    size: "sm",
                  }),
                  link.variant === "default" &&
                    "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                  "justify-start",
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      "ml-auto",
                      link.variant === "default" &&
                        "text-background dark:text-white",
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </Link>
            ),
          )}
        </nav>
      </div>
    </TooltipProvider>
  );
}
