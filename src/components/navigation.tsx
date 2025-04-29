"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/", label: "Home" },
  { href: "/forms", label: "Form Elements" },
  { href: "/tables", label: "Tables" },
  { href: "/dynamic", label: "Dynamic Content" },
  { href: "/dialogs", label: "Dialogs & Popups" },
  { href: "/ajax", label: "AJAX Requests" },
  { href: "/draggable", label: "Drag & Drop" },
  { href: "/iframes", label: "iFrames" },
  { href: "/locators", label: "Locator Practice" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col space-y-1 w-full">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "px-3 py-2 text-sm rounded-md hover:bg-zinc-100 transition-colors",
            pathname === route.href
              ? "bg-zinc-100 text-zinc-900 font-medium"
              : "text-zinc-600"
          )}
          data-testid={`nav-${route.label.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
