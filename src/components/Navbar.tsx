"use client";

import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, profile } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar({ hasCv }: { hasCv: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#top" className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white dark:text-bg" aria-label={`${profile.name}, back to top`}>
          {profile.initials}
        </a>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-muted transition hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {hasCv && (
            <a
              href={profile.cvPath}
              download
              className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 sm:inline-flex dark:text-bg"
            >
              <Download className="h-4 w-4" /> CV
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-border bg-bg px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block py-2 text-muted hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
          {hasCv && (
            <li>
              <a href={profile.cvPath} download className="block py-2 font-medium text-accent">
                Download CV
              </a>
            </li>
          )}
        </ul>
      )}
    </header>
  );
}
