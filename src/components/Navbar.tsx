import React, { useState } from 'react';
import { Ticket, Menu, X, Calendar, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenRsvp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRsvp,
}) => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-yellow flex items-center justify-center font-mono font-black text-black text-sm sm:text-base border-2 border-black shadow-brutal-white group-hover:scale-105 transition-transform">
            AW
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs sm:text-sm font-black tracking-wider uppercase text-white group-hover:text-brand-yellow transition-colors">
              Amine Woods <span className="text-brand-yellow font-normal">×</span> Mothrland
            </span>
            <span className="font-mono text-[10px] text-zinc-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
              NOV 14 • POZNAŃ
            </span>
          </div>
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

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenRsvp}
            type="button"
            className="flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellowHover text-black font-mono font-black text-xs uppercase px-3 sm:px-4 py-2 border-2 border-black shadow-brutal-yellow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>FREE PASS</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 text-zinc-300 hover:text-white border-2 border-zinc-700"
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
