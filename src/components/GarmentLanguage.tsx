import React, { useState } from 'react';
import { Scissors, Tag, CheckCircle2, ChevronRight, Hash } from 'lucide-react';

interface GarmentPrinciple {
  id: string;
  number: string;
  title: string;
  category: 'Craft' | 'Silhouette' | 'Material';
  summary: string;
  detail: string;
  badge: string;
}

const PRINCIPLES: GarmentPrinciple[] = [
  {
    id: 'upcycled-fabrics',
    number: '01',
    title: 'UPCYCLED FABRICS',
    category: 'Material',
    summary: 'Deadstock twills, vintage canvases, military surplus, and post-consumer cotton.',
    detail: 'No virgin textiles are consumed. Each roll of fabric has a documented past before entering the cutting room.',
    badge: '100% Sourced',
  },
  {
    id: 'reworked-essentials',
    number: '02',
    title: 'REWORKED ESSENTIALS',
    category: 'Silhouette',
    summary: 'Classic hoodies, workwear jackets, trousers, and overshirts rebuilt from scratch.',
    detail: 'Subverting everyday silhouettes with asymmetric cuts, dropped shoulders, and unexpected darting.',
    badge: 'Archetype Shift',
  },
  {
    id: 'torn-repaired-hems',
    number: '03',
    title: 'TORN / REPAIRED HEMS',
    category: 'Craft',
    summary: 'Raw fringe, distressed edges, intentional rips stabilized with heavy bar tacks.',
    detail: 'Honoring wear and tear. Frayed threads are retained and reinforced with contrasting thread.',
    badge: 'Hand-Finished',
  },
  {
    id: 'visible-construction',
    number: '04',
    title: 'VISIBLE CONSTRUCTION',
    category: 'Craft',
    summary: 'Exposed overlock seams, interior bias binding turned inside-out, contrast topstitching.',
    detail: 'The mechanics of garment making are celebrated outward rather than hidden within linings.',
    badge: 'Inside Out',
  },
  {
    id: 'offcut-panels',
    number: '05',
    title: 'OFFCUT PANELS',
    category: 'Material',
    summary: 'Collaged textile geometry utilizing triangular and trapezoidal remnants.',
    detail: 'Zero textile waste: offcuts from large outerwear pattern blocks are salvaged for pockets and paneling.',
    badge: 'Zero Waste',
  },
  {
    id: 'one-off-details',
    number: '06',
    title: 'ONE-OFF DETAILS',
    category: 'Craft',
    summary: 'Safety pins, mismatch buttons, custom textile dyes, hand-painted insignias.',
    detail: 'No two pieces possess identical hardware. Safety pins are deployed as both fasteners and kinetic jewelry.',
    badge: 'Unique Artifact',
  },
  {
    id: 'altered-proportions',
    number: '07',
    title: 'ALTERED PROPORTIONS',
    category: 'Silhouette',
    summary: 'Cropped torsos with elongated sleeves; voluminous pant legs with tapered cuffs.',
    detail: 'Playing with gravity and volume to create a distinctive, street-rooted avant-garde stance.',
    badge: 'Sculptural Fit',
  },
  {
    id: 'utility-interrupted',
    number: '08',
    title: 'UTILITY, INTERRUPTED',
    category: 'Silhouette',
    summary: 'Cargo pockets placed in non-standard zones; functional loops with subverted purpose.',
    detail: 'Functional workwear tropes re-examined as sculptural elements rather than pure ergonomics.',
    badge: 'Subverted Duty',
  },
  {
    id: 'worn-texture',
    number: '09',
    title: 'WORN TEXTURE',
    category: 'Material',
    summary: 'Softened stonewash, faded sun-bleached panels, authentic textile patinas.',
    detail: 'Fabrics that feel familiar, broken-in, and full of character from the moment they are tried on.',
    badge: 'Vintage Touch',
  },
  {
    id: 'numbered-pieces',
    number: '10',
    title: 'NUMBERED PIECES',
    category: 'Craft',
    summary: 'Hand-stamped serial stamps and archive badges verifying exclusivity.',
    detail: 'Every single piece released at the pop-up carries a registered edition number in the atelier ledger.',
    badge: 'Archive Series',
  },
];

export const GarmentLanguage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Craft' | 'Silhouette' | 'Material'>('All');
  const [expandedId, setExpandedId] = useState<string | null>('upcycled-fabrics');

  const filteredPrinciples = selectedCategory === 'All'
    ? PRINCIPLES
    : PRINCIPLES.filter((p) => p.category === selectedCategory);

  return (
    <section id="garments" className="py-20 bg-brand-dark relative border-b-2 border-brand-yellow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b-2 border-zinc-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow text-black font-mono text-xs font-black uppercase mb-3">
              <Scissors className="w-3.5 h-3.5" />
              <span>DESIGN PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-black tracking-tight text-white uppercase">
              Garment <span className="text-brand-yellow">Language</span>
            </h2>
            <p className="text-zinc-400 font-mono text-sm max-w-xl mt-2">
              The 10 foundational construction tenets defining the Amine Woods x Mothrland Atelier collection.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Material', 'Craft', 'Silhouette'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`font-mono text-xs font-bold uppercase px-3 py-1.5 border-2 transition-all ${
                  selectedCategory === cat
                    ? 'border-brand-yellow bg-brand-yellow text-black shadow-brutal-white'
                    : 'border-zinc-700 bg-brand-card text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPrinciples.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`group cursor-pointer bg-brand-card border-2 p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between ${
                  isExpanded
                    ? 'border-brand-yellow shadow-brutal-yellow bg-zinc-900/90'
                    : 'border-zinc-800 hover:border-zinc-600 hover:shadow-brutal-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
                    <span className="font-mono text-xs font-black text-brand-yellow flex items-center gap-1">
                      <Hash className="w-3.5 h-3.5" />
                      {item.number}
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-zinc-800 text-zinc-300">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-mono text-lg sm:text-xl font-black uppercase text-white group-hover:text-brand-yellow transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-zinc-400 font-mono text-xs sm:text-sm leading-relaxed">
                    {item.summary}
                  </p>

                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-zinc-800 text-xs font-mono text-zinc-300 bg-zinc-950/60 p-3 border-l-2 border-brand-yellow">
                      <div className="font-bold text-brand-yellow mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>ATELIER SPECIFICATION:</span>
                      </div>
                      {item.detail}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between text-xs font-mono">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-zinc-400">
                    <Tag className="w-3 h-3 text-brand-red" />
                    <span>{item.badge}</span>
                  </span>
                  <span className="text-zinc-500 group-hover:text-brand-yellow flex items-center gap-0.5 text-xs">
                    <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
