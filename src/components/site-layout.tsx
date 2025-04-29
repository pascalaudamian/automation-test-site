"use client";

import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r p-4 flex flex-col">
        <div className="p-2 mb-6">
          <h2 className="font-bold text-xl" data-testid="site-title">
            Automation Test Site
          </h2>
          <p className="text-xs text-zinc-500">For practice and learning</p>
        </div>
        <Navigation />
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}
