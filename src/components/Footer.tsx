import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darker border-t-2 border-brand-yellow/30 pt-16 pb-24 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top logos bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b-2 border-zinc-800">
          <div className="flex items-center gap-8">
            {/* Amine Woods Logo */}
            <div className="flex flex-col items-center">
              <img
                src="/assets/2.png"
                alt="Amine Woods Logo"
                className="h-10 sm:h-12 w-auto invert filter brightness-200"
              />
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2 font-bold">
                AMINE WOODS ATELIER
              </span>
            </div>

            <span className="text-brand-yellow font-black text-xl">✕</span>

            {/* Mothrland Atelier Logo */}
            <div className="flex flex-col items-center">
              <img
                src="/assets/3.png"
                alt="Mothrland Atelier Logo"
                className="h-10 sm:h-12 w-auto invert filter brightness-200"
              />
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2 font-bold">
                MOTHRLAND ATELIER
              </span>
            </div>
          </div>

          {/* Quick statement */}
          <div className="text-center md:text-right max-w-sm">
            <div className="text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center md:justify-end gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
              <span>A ONE-DAY POP-UP COLLISION</span>
            </div>
            <p className="text-zinc-500 mt-1">
              Garments, paintings, objects, sound and people gathered in Poznań.
            </p>
          </div>
        </div>

        {/* Middle Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-zinc-900">
          <div>
            <h5 className="font-bold uppercase tracking-wider text-white mb-3 text-xs">DATE & TIME</h5>
            <p className="text-zinc-300">14 November 2026</p>
            <p className="text-brand-yellow font-bold mt-1">14:00 — 20:00 CET</p>
            <p className="text-zinc-500 text-[11px] mt-1">One Day Only</p>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-wider text-white mb-3 text-xs">VENUE LOCATION</h5>
            <p className="text-zinc-300">Mothrland Atelier</p>
            <p className="text-zinc-400 mt-1">ul. 28 Czerwca 1956 roku 128</p>
            <p className="text-brand-yellow font-bold text-[11px] mt-1">Apartment 09 • Poznań</p>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-wider text-white mb-3 text-xs">CURATION</h5>
            <p className="text-zinc-300">Upcycled Garments: Amine Woods</p>
            <p className="text-zinc-300 mt-1">Original Paintings: Senamie</p>
            <p className="text-zinc-300 mt-1">Spatial Design: Mothrland</p>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-wider text-white mb-3 text-xs">ADMISSION</h5>
            <span className="inline-block bg-brand-red text-white font-black px-2.5 py-1 uppercase text-xs shadow-brutal-white">
              FREE ENTRY
            </span>
            <p className="text-zinc-500 text-[11px] mt-2">
              All visitors welcome. First-come first-served for one-off pieces.
            </p>
          </div>
        </div>

        {/* Bottom credits & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div className="flex items-center gap-1">
            <span>© 2026 Amine Woods × Mothrland Atelier. Built with</span>
            <Heart className="w-3 h-3 text-brand-red fill-brand-red inline" />
            <span>in Poznań.</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-brand-yellow uppercase tracking-widest font-bold transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
