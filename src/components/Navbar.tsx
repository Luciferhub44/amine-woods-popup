import React, { useState } from 'react';
import { Menu, X, Calendar, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenRsvp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Posters', href: '#posters' },
    { label: 'Theme', href: '#theme' },
    { label: 'Garment Language', href: '#garments' },
    { label: 'In The Room', href: '#exhibition' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-brand-yellow/30 bg-brand-darker/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center justify-center h-16 sm:h-20 overflow-hidden group"
          aria-label="Amine Woods"
        >
          <img
            src="/assets/Amine_Logo.png"
            alt="Amine Woods"
            className="h-32 sm:h-40 w-auto max-w-none -mx-3 object-contain brightness-125 contrast-125 drop-shadow-[0_2px_10px_rgba(255,229,0,0.3)] group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs font-bold uppercase tracking-wider text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-brand-yellow hover:underline decoration-brand-yellow underline-offset-8 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 text-zinc-300 hover:text-white border-2 border-zinc-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-brand-border bg-brand-dark p-6 space-y-4">
          <nav className="flex flex-col gap-4 font-mono text-sm font-bold uppercase tracking-wider text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-brand-yellow transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-yellow" />
              <span>14 November • 14:00 - 20:00</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-yellow" />
              <span>Poznań, 28 Czerwca 1956 Roku 128 / Apt 09</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
