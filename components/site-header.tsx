"use client";

import { Menu, Terminal, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const sectionNavItems = [
  { href: "#top", label: "boot()" },
  { href: "#playground", label: "runGames()" },
  { href: "#about", label: "describeWork()" },
  { href: "#projects", label: "projects[]" },
  { href: "#skills", label: "stack.map()" },
  { href: "#contact", label: "contact()" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[min(96vw,1040px)] items-center justify-between rounded-full border border-border/70 bg-background/78 px-3 py-2 shadow-[0_10px_28px_rgba(3,8,18,0.45)] backdrop-blur-md sm:px-4">
        <a href="#top" className="mr-4 flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Terminal size={14} />
          </div>
          <span className="font-mono text-sm font-semibold tracking-tight">argo.dev</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          <Link
            className="rounded-full border border-border/55 bg-muted/15 px-3 py-1 font-mono text-[10px] font-medium tracking-[0.18em] text-primary transition-colors hover:bg-primary/10"
            href="/profile"
          >
            import profile
          </Link>
          {sectionNavItems.map((item) => (
            <a
              key={item.href}
              className="rounded-full px-3 py-1 font-mono text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center md:hidden">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="size-8 rounded-full border-border/70 bg-background/65"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-background/55 backdrop-blur-sm md:hidden" onClick={closeMenu} aria-hidden="true" />
      ) : null}

      <div
        className={`fixed left-1/2 top-20 z-50 w-[calc(100vw-2rem)] max-w-sm -translate-x-1/2 rounded-2xl border border-border/70 bg-background/95 p-4 shadow-[0_14px_34px_rgba(3,8,18,0.4)] backdrop-blur-md transition-all duration-200 md:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2">
          <Link
            className="rounded-xl border border-border/55 bg-muted/20 px-4 py-2 font-mono text-xs font-semibold tracking-[0.14em] text-primary"
            href="/profile"
            onClick={closeMenu}
          >
            import profile
          </Link>
          {sectionNavItems.map((item) => (
            <a
              key={item.href}
              className="rounded-xl px-4 py-2 font-mono text-xs text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div
        className="fixed right-4 bottom-4 z-80 md:hidden"
        style={{
          right: "max(1rem, env(safe-area-inset-right))",
          bottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
      >
        <ThemeToggle className="size-12 rounded-full border-primary/35 bg-primary/20 text-primary shadow-[0_14px_30px_rgba(3,8,18,0.48)] backdrop-blur" />
      </div>
    </>
  );
}
