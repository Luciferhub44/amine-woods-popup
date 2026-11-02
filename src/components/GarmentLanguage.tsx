import React, { useState } from 'react';
import { Scissors } from 'lucide-react';

interface GarmentPrinciple {
  id: string;
  number: string;
  title: string;
  category: 'Craft' | 'Silhouette' | 'Material';
  description: string;
  badge: string;
}

const PRINCIPLES: GarmentPrinciple[] = [
  {
    id: 'upcycled-fabrics',
    number: '01',
    title: 'UPCYCLED FABRICS',
    category: 'Material',
    description: 'Deadstock twills, vintage canvases, military surplus, and post-consumer cotton. No virgin textiles are consumed—each roll carries a documented past.',
    badge: '100% Sourced',
  },
  {
    id: 'reworked-essentials',
    number: '02',
    title: 'REWORKED ESSENTIALS',
    category: 'Silhouette',
    description: 'Classic hoodies, workwear jackets, trousers, and overshirts rebuilt with asymmetric cuts, dropped shoulders, and unexpected darting.',
    badge: 'Archetype Shift',
  },
  {
    id: 'torn-repaired-hems',
    number: '03',
    title: 'TORN / REPAIRED HEMS',
    category: 'Craft',
    description: 'Raw fringe, distressed edges, and intentional rips stabilized with heavy bar tacks and contrasting thread to honor wear and tear.',
    badge: 'Hand-Finished',
  },
  {
    id: 'visible-construction',
    number: '04',
    title: 'VISIBLE CONSTRUCTION',
    category: 'Craft',
    description: 'Exposed overlock seams, interior bias binding turned inside-out, and contrast topstitching celebrate the mechanics of garment making.',
    badge: 'Inside Out',
  },
  {
    id: 'offcut-panels',
    number: '05',
    title: 'OFFCUT PANELS',
    category: 'Material',
    description: 'Collaged textile geometry salvages triangular and trapezoidal remnants from outerwear pattern blocks for pockets and paneling.',
    badge: 'Zero Waste',
  },
  {
    id: 'one-off-details',
    number: '06',
    title: 'ONE-OFF DETAILS',
    category: 'Craft',
    description: 'Safety pins, mismatch buttons, custom textile dyes, and hand-painted insignias ensure no two pieces possess identical hardware.',
    badge: 'Unique Artifact',
  },
];

export const GarmentLanguage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Craft' | 'Silhouette' | 'Material'>('All');

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
              The 6 foundational construction tenets defining the Amine Woods collection.
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
                    ? 'border-brand-yellow bg-brand-yellow text-black shadow-brutal-white font-black'
                    : 'border-zinc-700 bg-brand-card text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Simplified Principles Grid (01 - 06) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrinciples.map((item) => (
            <div
              key={item.id}
              className="bg-brand-card border-2 border-zinc-800 hover:border-brand-yellow p-6 flex flex-col justify-between transition-colors shadow-brutal-black hover:shadow-brutal-white"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800">
                  <span className="font-mono text-sm font-black text-brand-yellow">
                    {item.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-zinc-800 text-zinc-300">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-mono text-lg font-black uppercase text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-zinc-400 font-mono text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] font-bold text-zinc-400">
                  {item.badge}
                </span>
                <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">
                  RULE // {item.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
