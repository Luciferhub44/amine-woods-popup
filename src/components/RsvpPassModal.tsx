import React, { useState } from 'react';
import { X, Sparkles, Download, Check, Ticket, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { downloadIcsFile } from '../utils/calendar';

interface RsvpPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpPassModal: React.FC<RsvpPassModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passGenerated, setPassGenerated] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const randomSerial = `AW-ML-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketNumber(randomSerial);
    setPassGenerated(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFE500', '#FF2A1E', '#FFFFFF', '#14161B'],
      });
    } catch {
      // ignore if canvas context is unavailable in tests
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="relative max-w-lg w-full bg-brand-darker border-4 border-black shadow-brutal-yellow p-6 sm:p-8 my-8">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white border border-zinc-700 bg-brand-card"
          aria-label="Close pass modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!passGenerated ? (
          <div>
            <div className="flex items-center gap-2 text-brand-yellow font-mono text-xs font-black uppercase mb-2">
              <Ticket className="w-4 h-4" />
              <span>DIGITAL GUEST PASS</span>
            </div>

            <h3 className="font-mono text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Register for Free Entry
            </h3>

            <p className="font-mono text-xs text-zinc-400 mt-2">
              Generate your personalized digital guest pass for the Amine Woods x Mothrland Atelier Pop-Up on November 14 in Poznań.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-mono text-xs">
              <div>
                <label htmlFor="guest-name" className="block text-zinc-300 font-bold uppercase mb-1">
                  FULL NAME / ALIAS *
                </label>
                <input
                  id="guest-name"
                  type="text"
                  required
                  placeholder="e.g. Maya Kowalska"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-card border-2 border-zinc-700 focus:border-brand-yellow px-4 py-3 text-white placeholder-zinc-600 outline-none font-mono"
                />
              </div>

              <div>
                <label htmlFor="guest-email" className="block text-zinc-300 font-bold uppercase mb-1">
                  EMAIL (OPTIONAL FOR ARCHIVE UPDATES)
                </label>
                <input
                  id="guest-email"
                  type="email"
                  placeholder="e.g. maya@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-brand-card border-2 border-zinc-700 focus:border-brand-yellow px-4 py-3 text-white placeholder-zinc-600 outline-none font-mono"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-yellow hover:bg-brand-yellowHover text-black font-mono font-black text-sm uppercase py-4 border-2 border-black shadow-brutal-white transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>GENERATE MY PASS</span>
                </button>
              </div>

              <p className="text-[11px] text-zinc-500 text-center">
                Free entry • No ticket payment needed • Doors open at 14:00
              </p>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono text-xs font-black uppercase">
                <Check className="w-3.5 h-3.5" />
                <span>PASS CONFIRMED & READY</span>
              </span>
            </div>

            {/* Generated Ticket Pass Artifact */}
            <div className="bg-brand-yellow text-black p-5 sm:p-6 border-4 border-black shadow-brutal-white font-mono relative overflow-hidden">
              {/* Notch accents */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-brand-darker rounded-full border-2 border-black" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-brand-darker rounded-full border-2 border-black" />

              <div className="flex justify-between items-start border-b-2 border-black/40 pb-3 mb-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-black/70">
                    POP UP EXHIBITION PASS
                  </div>
                  <div className="text-lg font-black uppercase tracking-tight">
                    AMINE WOODS × MOTHRLAND
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-black/70 uppercase">PASS ID</div>
                  <div className="text-xs font-black tracking-widest bg-black text-brand-yellow px-2 py-0.5">
                    {ticketNumber}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs my-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-black/70 block">ATTENDEE</span>
                  <span className="font-black text-sm uppercase truncate block">{name}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-black/70 block">ADMISSION</span>
                  <span className="font-black text-sm uppercase text-brand-red">FREE ENTRY (VIP)</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-black/70 block">DATE & TIME</span>
                  <span className="font-bold text-xs">NOV 14 • 14:00 - 20:00</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-black/70 block">LOCATION</span>
                  <span className="font-bold text-xs truncate block">POZNAŃ / APT 09</span>
                </div>
              </div>

              {/* Barcode representation */}
              <div className="pt-3 border-t-2 border-dashed border-black/40 flex items-center justify-between">
                <div className="flex items-center gap-1 h-8">
                  {[3, 1, 4, 2, 5, 1, 3, 2, 4, 1, 2, 4, 3, 1, 5, 2, 3, 1].map((w, idx) => (
                    <div
                      key={idx}
                      className="bg-black h-full"
                      style={{ width: `${w * 2}px` }}
                    />
                  ))}
                </div>
                <div className="text-[10px] font-mono tracking-widest font-black">
                  VALID FOR ENTRY
                </div>
              </div>
            </div>

            {/* Pass Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handlePrint}
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-mono font-bold text-xs uppercase px-4 py-3 border-2 border-black shadow-brutal-white hover:bg-zinc-200 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>SAVE / PRINT PASS</span>
              </button>

              <button
                onClick={() => downloadIcsFile()}
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-brand-card hover:bg-zinc-800 text-brand-yellow font-mono font-bold text-xs uppercase px-4 py-3 border-2 border-brand-yellow/50 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>ADD TO CALENDAR</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
