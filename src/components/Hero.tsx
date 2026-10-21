import React from 'react';
import { Calendar, MapPin, Sparkles, ArrowDown, Download, ExternalLink } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { downloadIcsFile, getGoogleCalendarUrl } from '../utils/calendar';

interface HeroProps {
  onOpenRsvp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRsvp }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-brand-darker border-b-2 border-brand-yellow/30">
      {/* Background Graphic Asset from poster */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <img
          src="/assets/6.png"
          alt="Poster backdrop texture"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Top Banner Accent */}
      <div className="relative z-10 w-full bg-brand-red text-white py-2 px-4 text-center font-mono text-xs sm:text-sm font-black tracking-widest uppercase border-b-2 border-black flex items-center justify-center gap-4">
        <span>✦ FREE ENTRY</span>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">UPCYCLED GARMENTS • ART • OBJECTS • SOUND</span>
        <span className="hidden sm:inline">|</span>
        <span>ONE DAY ONLY ✦</span>
      </div>

      {/* Main Content Stage */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-1 flex flex-col justify-center items-center text-center">
        {/* Floating "Fashion & Art" burst badge from poster */}
        <div className="relative mb-4 sm:mb-6 animate-float-slow">
          <img
            src="/assets/1.png"
            alt="Fashion & Art"
            className="w-48 sm:w-64 md:w-72 drop-shadow-glow-yellow transform -rotate-3 hover:rotate-0 transition-transform cursor-pointer"
          />
        </div>

        {/* 3D Isometric POP UP Typography */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 my-2 sm:my-4">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/5.png"
              alt="POP"
              className="h-24 sm:h-36 md:h-44 object-contain filter drop-shadow-2xl"
            />
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <img
              src="/assets/4.png"
              alt="UP"
              className="h-24 sm:h-36 md:h-44 object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Collaborators Subtitle */}
        <div className="mt-4 mb-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-mono text-sm sm:text-lg tracking-widest text-zinc-300">
          <span className="text-brand-yellow font-black">BY AMINE WOODS</span>
          <span className="text-brand-red font-bold">✕</span>
          <span className="text-white font-black tracking-wider">MOTHRLAND ATELIER</span>
        </div>

        {/* Key Event Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 my-6">
          <div className="flex items-center gap-2 bg-brand-yellow text-black font-mono font-black text-xs sm:text-sm px-3.5 py-2 border-2 border-black shadow-brutal-white">
            <Calendar className="w-4 h-4" />
            <span>NOV 14, 2026</span>
          </div>

          <div className="flex items-center gap-2 bg-brand-card text-brand-yellow font-mono font-bold text-xs sm:text-sm px-3.5 py-2 border-2 border-brand-yellow/50">
            <span>14:00 TO 20:00 CET</span>
          </div>

          <div className="flex items-center gap-2 bg-brand-red text-white font-mono font-black text-xs sm:text-sm px-3.5 py-2 border-2 border-black shadow-brutal-yellow">
            <MapPin className="w-4 h-4" />
            <span>POZNAŃ • APT 09</span>
          </div>
        </div>

        {/* Live Countdown */}
        <div className="w-full my-6">
          <CountdownTimer />
        </div>

        {/* Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-md">
          <button
            onClick={onOpenRsvp}
            type="button"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-3 bg-brand-yellow hover:bg-brand-yellowHover text-black font-mono font-black text-sm uppercase px-8 py-4 border-2 border-black shadow-brutal-yellow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Sparkles className="w-5 h-5 fill-black" />
            <span>CLAIM FREE PASS</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => downloadIcsFile()}
              type="button"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-brand-card hover:bg-zinc-800 text-white font-mono font-bold text-xs uppercase px-4 py-4 border-2 border-zinc-700 hover:border-brand-yellow transition-colors"
              title="Download iCal file"
            >
              <Download className="w-4 h-4 text-brand-yellow" />
              <span>.ICS</span>
            </button>

            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-brand-card hover:bg-zinc-800 text-white font-mono font-bold text-xs uppercase px-4 py-4 border-2 border-zinc-700 hover:border-brand-yellow transition-colors"
              title="Add to Google Calendar"
            >
              <ExternalLink className="w-4 h-4 text-brand-yellow" />
              <span>GOOGLE CAL</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-10 w-full py-4 text-center">
        <a
          href="#posters"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand-yellow font-mono text-xs uppercase tracking-widest transition-colors"
        >
          <span>EXPLORE EXHIBITION & POSTERS</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
