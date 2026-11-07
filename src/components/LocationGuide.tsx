import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, TramFront, ShieldCheck } from 'lucide-react';

export const LocationGuide: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const address = '28 Czerwca 1956 Roku 128, Apartment 09, Poznań, Poland';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('28 Czerwca 1956 roku 128 Poznań')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-brand-dark relative border-b-2 border-brand-yellow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 border-b-2 border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow text-black font-mono text-xs font-black uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>VENUE & ARRIVAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-mono font-black tracking-tight text-white uppercase">
            The <span className="text-brand-yellow">Location</span>
          </h2>
          <p className="text-zinc-400 font-mono text-sm max-w-xl mt-2">
            Hosted inside Mothrland Atelier in Poznań. Enter through the courtyard.
          </p>
        </div>

        {/* Simplified Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Address & Venue Card */}
          <div className="lg:col-span-7 bg-brand-card border-4 border-black p-6 sm:p-10 shadow-brutal-yellow space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-yellow font-black">
                OFFICIAL VENUE
              </span>
              <span className="font-mono text-xs bg-brand-red text-white px-2.5 py-1 uppercase font-bold">
                FREE ADMISSION
              </span>
            </div>

            <div>
              <h3 className="font-mono text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Mothrland Atelier
              </h3>
              <p className="font-mono text-lg sm:text-xl text-brand-yellow mt-2 font-bold">
                28 CZERWCA 1956 ROKU 128
              </p>
              <p className="font-mono text-sm text-zinc-300">
                APARTMENT 09 • WILDA, POZNAŃ
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={handleCopy}
                type="button"
                className="flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellowHover text-black font-mono font-bold text-xs uppercase px-5 py-3.5 border-2 border-black shadow-brutal-white transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-800" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'ADDRESS COPIED!' : 'COPY ADDRESS'}</span>
              </button>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-mono font-bold text-xs uppercase px-5 py-3.5 border-2 border-zinc-700 hover:border-brand-yellow transition-colors"
              >
                <Navigation className="w-4 h-4 text-brand-yellow" />
                <span>OPEN GOOGLE MAPS</span>
              </a>
            </div>

            {/* Timings row */}
            <div className="pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4 font-mono text-xs">
              <div>
                <span className="text-zinc-500 uppercase block mb-1">DATE:</span>
                <span className="text-white font-bold text-sm">SATURDAY, 14 NOV 2026</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase block mb-1">HOURS:</span>
                <span className="text-brand-yellow font-bold text-sm">14:00 — 20:00 CET</span>
              </div>
            </div>
          </div>

          {/* Unified Arrival Guide Card */}
          <div className="lg:col-span-5 bg-brand-card border-2 border-zinc-800 p-6 sm:p-8 space-y-6 font-mono text-xs shadow-brutal-black">
            <h4 className="font-bold uppercase tracking-wider text-white text-sm pb-2 border-b border-zinc-800">
              ARRIVAL GUIDE
            </h4>

            {/* Transit */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-brand-yellow font-bold uppercase">
                <TramFront className="w-4 h-4" />
                <span>PUBLIC TRANSIT</span>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Take tram lines 2, 9, or 10 to stop <strong className="text-white">Pamiątkowa</strong> or <strong className="text-white">Traugutta</strong>. The atelier is a 3-minute walk south.
              </p>
            </div>

            {/* Courtyard entry */}
            <div className="space-y-1.5 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-2 text-brand-red font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>COURTYARD ACCESS</span>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Enter through the archway into the main courtyard. Press <strong className="text-brand-yellow">09</strong> on the intercom or follow directional signs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
