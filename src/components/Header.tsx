"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blanc/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo-orange.png"
            alt="Ness Boissons"
            width={160}
            height={60}
            priority
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <Link
            href="#services"
            className="text-noir hover:text-orange transition-colors"
          >
            Services
          </Link>
          <Link
            href="#partenaires"
            className="text-noir hover:text-orange transition-colors"
          >
            Partenaires
          </Link>
          <Link
            href="#apropos"
            className="text-noir hover:text-orange transition-colors"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="bg-orange text-blanc px-6 py-2.5 rounded-full hover:bg-orange-dark transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-noir transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-noir transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-noir transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-blanc border-t border-beige px-6 py-6 flex flex-col gap-4 text-sm font-medium uppercase tracking-wider">
          <Link
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-noir hover:text-orange transition-colors"
          >
            Services
          </Link>
          <Link
            href="#partenaires"
            onClick={() => setMenuOpen(false)}
            className="text-noir hover:text-orange transition-colors"
          >
            Partenaires
          </Link>
          <Link
            href="#apropos"
            onClick={() => setMenuOpen(false)}
            className="text-noir hover:text-orange transition-colors"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-orange text-blanc px-6 py-2.5 rounded-full hover:bg-orange-dark transition-colors text-center"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
