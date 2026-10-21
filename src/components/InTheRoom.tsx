import React, { useState } from 'react';
import { Box, Sparkles, User, ShoppingBag, Music, Image as ImageIcon } from 'lucide-react';

interface RoomItem {
  id: string;
  title: string;
  artistOrLead: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

const ROOM_ITEMS: RoomItem[] = [
  {
    id: 'reworked-garments',
    title: 'REWORKED GARMENTS',
    artistOrLead: 'Amine Woods',
    badge: 'Limited Archive',
    icon: <ShoppingBag className="w-5 h-5 text-brand-yellow" />,
    description: 'Statement outerwear, structural vests, and altered denim engineered from salvaged textiles.',
    details: ['Constructed in Poznań', 'Individual serial numbers', 'Unisex proportions'],
  },
  {
    id: 'paintings-senamie',
    title: 'A2 ORIGINAL PAINTINGS BY SENAMIE',
    artistOrLead: 'Senamie',
    badge: 'Original Fine Art',
    icon: <ImageIcon className="w-5 h-5 text-brand-red" />,
    description: 'A curated suite of raw expressionist pigment works on A2 unprimed canvas, conversing directly with garment textures.',
    details: ['A2 dimensions (420 × 594 mm)', 'Mixed media & oil stick', 'Available for collection'],
  },
  {
    id: 'phone-pouches',
    title: 'OFFCUT PHONE POUCHES',
    artistOrLead: 'Amine Woods × Workshop',
    badge: 'Everyday Object',
    icon: <Box className="w-5 h-5 text-brand-yellow" />,
    description: 'Modular tactile cross-body pouches constructed from garment cutting scraps with climbing cord and steel clasps.',
    details: ['Universal smartphone sizing', 'Zero-waste offcut pattern', 'Industrial steel hardware'],
  },
  {
    id: 'one-of-one',
    title: 'ONE-OF-ONE PIECES',
    artistOrLead: 'Amine Woods',
    badge: '1 of 1 Exclusives',
    icon: <Sparkles className="w-5 h-5 text-brand-yellow" />,
    description: 'Singular showstopper garments that will never be duplicated. Unique dye bleeds, patchwork configurations, and signature hardware.',
    details: ['Certificate of authenticity', 'Single size edition', 'Permanent archive entry'],
  },
  {
    id: 'everyday-essentials',
    title: 'EVERYDAY ESSENTIALS',
    artistOrLead: 'Mothrland Atelier',
    badge: 'Wardrobe Core',
    icon: <ShoppingBag className="w-5 h-5 text-zinc-300" />,
    description: 'Heavyweight organic t-shirts, ribbed beanies, and tote bags with minimal atelier screenprints.',
    details: ['320 GSM heavyweight jersey', 'Water-based discharge ink', 'Ethically manufactured'],
  },
  {
    id: 'future-workshop',
    title: 'FUTURE WORKSHOP OBJECTS',
    artistOrLead: 'Mothrland Experimental',
    badge: 'Prototypes',
    icon: <Box className="w-5 h-5 text-brand-red" />,
    description: 'Sculptural homeware, textile book covers, pin trays, and experimental design prototypes for upcoming seasons.',
    details: ['Interactive handling', 'Feedback cards', 'Pre-order register'],
  },
  {
    id: 'sound-people',
    title: 'SOUND / PEOPLE / DOCUMENTATION',
    artistOrLead: 'Live Community Space',
    badge: 'Live Session',
    icon: <Music className="w-5 h-5 text-brand-yellow" />,
    description: 'Continuous sonic programming, live community portrait photography by the Mothrland team, and open conversation.',
    details: ['35mm film documentation', 'Live DJ / synth selector', 'Archive photo zine release'],
  },
];

export const InTheRoom: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>(ROOM_ITEMS[0].id);

  return (
    <section id="exhibition" className="py-20 bg-brand-darker relative border-b-2 border-brand-yellow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 border-b-2 border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white font-mono text-xs font-black uppercase mb-3 shadow-brutal-white">
            <Box className="w-3.5 h-3.5" />
            <span>EXHIBITION CHECKLIST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-mono font-black tracking-tight text-white uppercase">
            In The <span className="text-brand-yellow">Room</span>
          </h2>
          <p className="text-zinc-400 font-mono text-sm max-w-xl mt-2">
            Everything present inside Apartment 09 on November 14th. All objects are available for viewing and acquisition.
          </p>
        </div>

        {/* Room items interactive list & showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Items Selector */}
          <div className="lg:col-span-6 space-y-3">
            {ROOM_ITEMS.map((item, index) => {
              const isSelected = activeItem === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`p-4 border-2 cursor-pointer font-mono transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-brand-yellow bg-brand-card shadow-brutal-yellow translate-x-1'
                      : 'border-zinc-800 bg-brand-dark hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black text-brand-yellow">
                      0{index + 1}
                    </span>
                    <span className="p-1.5 bg-zinc-900 border border-zinc-800">{item.icon}</span>
                    <div>
                      <div className="text-sm font-black uppercase text-white">{item.title}</div>
                      <div className="text-[11px] text-zinc-400 font-normal flex items-center gap-1 mt-0.5">
                        <User className="w-3 h-3" />
                        <span>{item.artistOrLead}</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] uppercase font-bold px-2 py-0.5 border ${
                      isSelected
                        ? 'bg-brand-yellow text-black border-black font-black'
                        : 'border-zinc-700 text-zinc-400'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Detailed Item Spotlight */}
          <div className="lg:col-span-6 sticky top-24">
            {(() => {
              const current = ROOM_ITEMS.find((r) => r.id === activeItem) || ROOM_ITEMS[0];
              return (
                <div className="bg-brand-card border-4 border-black p-6 sm:p-8 shadow-brutal-yellow space-y-6">
                  <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-brand-yellow text-black">{current.icon}</span>
                      <div>
                        <span className="font-mono text-xs text-brand-yellow uppercase tracking-widest font-black block">
                          FEATURED OBJECT
                        </span>
                        <span className="font-mono text-xs text-zinc-400">{current.artistOrLead}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs bg-brand-red text-white px-2.5 py-1 font-black uppercase shadow-brutal-white">
                      {current.badge}
                    </span>
                  </div>

                  <h3 className="font-mono text-2xl font-black uppercase text-white leading-tight">
                    {current.title}
                  </h3>

                  <p className="font-mono text-sm text-zinc-300 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-zinc-800">
                    <div className="font-mono text-xs uppercase font-bold text-zinc-400 mb-2">
                      KEY SPECIFICATIONS:
                    </div>
                    {current.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-mono text-zinc-200">
                        <span className="text-brand-yellow font-bold">✦</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-black/60 border border-zinc-800 text-xs font-mono text-zinc-400 flex items-center justify-between">
                    <span>Availability: First-come first-served</span>
                    <span className="text-brand-yellow font-black">DOORS 14:00</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
