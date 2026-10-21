import React, { useState } from 'react';
import { Sparkles, Shirt, Palette, Music, Flame, Eye, Users } from 'lucide-react';

interface SenseElement {
  id: string;
  name: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  accent: string;
}

const SENSE_ELEMENTS: SenseElement[] = [
  {
    id: 'clothes',
    name: 'Clothes',
    icon: <Shirt className="w-5 h-5" />,
    subtitle: 'Altered Silhouettes & Upcycled Cuts',
    description:
      'Garments deconstructed and reassembled from deadstock fabrics, vintage heavy twills, and industrial offcuts. Visible stitches become the primary ornament.',
    accent: 'border-brand-yellow text-brand-yellow',
  },
  {
    id: 'art',
    name: 'Art',
    icon: <Palette className="w-5 h-5" />,
    subtitle: 'A2 Original Paintings by Senamie',
    description:
      'Raw canvas works hanging alongside clothing racks, creating a direct visual dialogue between painted texture and wearable textile sculpture.',
    accent: 'border-brand-red text-brand-red',
  },
  {
    id: 'sound',
    name: 'Sound',
    icon: <Music className="w-5 h-5" />,
    subtitle: 'Tactile Sonic Environments',
    description:
      'A continuous custom soundscape programmed for the apartment space—ambient frequencies, vinyl crackle, and raw industrial rhythm that ground the event.',
    accent: 'border-zinc-300 text-zinc-100',
  },
  {
    id: 'color',
    name: 'Color',
    icon: <Eye className="w-5 h-5" />,
    subtitle: 'Acid Yellow, Safety Red & Graphite',
    description:
      'High-impact contrast inspired by construction markings, safety pins, workshop tags, and raw unbleached cotton.',
    accent: 'border-brand-yellow text-brand-yellow',
  },
  {
    id: 'warmth',
    name: 'Warmth & Smell',
    icon: <Flame className="w-5 h-5" />,
    subtitle: 'Intimate Atelier Atmosphere',
    description:
      'Stepping into Apartment 09 feels like entering an active workshop: warm lighting, steamed textiles, incense, and personal hospitality.',
    accent: 'border-amber-400 text-amber-400',
  },
  {
    id: 'network',
    name: 'Creative Network',
    icon: <Users className="w-5 h-5" />,
    subtitle: 'People & Documentation',
    description:
      'A gathering place for independent designers, artists, students, and collectors in Poznań to converse, exchange ideas, and be documented in the event archive.',
    accent: 'border-brand-red text-brand-red',
  },
];

export const EventManifesto: React.FC = () => {
  const [activeSense, setActiveSense] = useState<string>(SENSE_ELEMENTS[0].id);

  const currentSense = SENSE_ELEMENTS.find((s) => s.id === activeSense) || SENSE_ELEMENTS[0];

  return (
    <section id="theme" className="py-20 bg-brand-darker relative border-b-2 border-brand-yellow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag & Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white font-mono text-xs font-black uppercase mb-4 shadow-brutal-white">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EVENT THEME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-mono font-black tracking-tight text-white uppercase leading-none">
            A one-day collision of <span className="text-brand-yellow underline decoration-brand-red decoration-wavy">garments</span>, <span className="text-white">paintings</span>, <span className="text-brand-red">objects</span>, sound and people.
          </h2>

          <p className="mt-6 font-mono text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Clothes, Art, Sound, Color, Warmth, Smell, and Creative Fashion Network.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['UPCYCLED GARMENTS', 'ART', 'HANDMADE', 'SAFETY PINS', 'COLLECTIBLES'].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs font-black px-3 py-1 bg-brand-card text-brand-yellow border-2 border-brand-yellow/40"
              >
                / {tag} /
              </span>
            ))}
          </div>
        </div>

        {/* Sensory Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sense Buttons Column */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest font-bold mb-2">
              SELECT SENSORY DIMENSION:
            </div>
            {SENSE_ELEMENTS.map((item) => {
              const isSelected = activeSense === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSense(item.id)}
                  type="button"
                  className={`w-full flex items-center justify-between p-4 border-2 font-mono text-left transition-all ${
                    isSelected
                      ? 'border-brand-yellow bg-brand-yellow/10 text-white shadow-brutal-yellow translate-x-1'
                      : 'border-zinc-800 bg-brand-card text-zinc-400 hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isSelected ? 'text-brand-yellow' : 'text-zinc-500'}>
                      {item.icon}
                    </span>
                    <div>
                      <div className="font-black text-sm uppercase">{item.name}</div>
                      <div className="text-[11px] text-zinc-500 font-normal">{item.subtitle}</div>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-brand-yellow font-bold">
                    {isSelected ? '● ACTIVE' : '○'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Card */}
          <div className="lg:col-span-7 bg-brand-card border-4 border-black p-6 sm:p-10 shadow-brutal-white relative min-h-[360px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-brand-yellow text-black">{currentSense.icon}</span>
                  <span className="font-mono text-lg font-black uppercase tracking-wider text-white">
                    {currentSense.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-brand-yellow uppercase tracking-widest">
                  DIMENSION 0{SENSE_ELEMENTS.findIndex((s) => s.id === currentSense.id) + 1}
                </span>
              </div>

              <h4 className="font-mono text-xl sm:text-2xl font-black text-zinc-100">
                {currentSense.subtitle}
              </h4>

              <p className="font-mono text-sm sm:text-base text-zinc-300 leading-relaxed pt-2">
                {currentSense.description}
              </p>
            </div>

            {/* Quote Footer */}
            <div className="pt-8 mt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-zinc-400">
              <div className="italic">
                &quot;Nothing discarded is final. Every remnant carries a second life.&quot;
              </div>
              <span className="font-bold text-brand-yellow uppercase shrink-0">
                — AMINE WOODS × MOTHRLAND
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
