"use client";

import { useEffect, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { NAV } from "@/data/profile";

/** En-tête fixe : fond flouté au défilement, lien actif selon la section affichée, menu mobile. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(NAV[0].href);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Section « active » : celle qui occupe le milieu de l'écran.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const item of NAV) {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  // Menu mobile : fermeture par Échap et blocage du défilement de la page derrière.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-navy-950/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#accueil" className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-accent-light">
          <span className="grid size-9 place-items-center rounded-lg bg-accent-strong font-display text-sm font-bold text-white shadow-lg shadow-accent/30 transition-transform group-hover:-rotate-6">
            RT
          </span>
          <span className="font-mono text-sm text-muted">
            riche<span className="text-accent-light">.dev</span>
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-accent-light ${
                    active === item.href ? "bg-accent/15 text-accent-soft" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="border-t border-line bg-navy-950 lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base ${
                    active === item.href ? "bg-accent/15 text-accent-soft" : "text-ink hover:bg-navy-800"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
