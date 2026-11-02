import React, { useState } from 'react';
import { Shirt, Palette, Music, Flame, Users } from 'lucide-react';

interface SenseElement {
  id: string;
  name: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
}

const SENSE_ELEMENTS: SenseElement[] = [
  {
    id: 'clothes',
    name: 'Clothes',
    icon: <Shirt className="w-5 h-5" />,
    subtitle: 'Altered Silhouettes & Upcycled Cuts',
    description:
      'Garments deconstructed and reassembled from deadstock fabrics, vintage heavy twills, and industrial offcuts. Visible stitches become the primary ornament.',
  },
  {
    id: 'art',
    name: 'Art',
    icon: <Palette className="w-5 h-5" />,
    subtitle: 'A2 Original Paintings by Senamie',
    description:
      'Raw canvas works hanging alongside clothing racks, creating a direct visual dialogue between painted texture and wearable textile sculpture.',
  },
  {
    id: 'sound',
    name: 'Sound',
    icon: <Music className="w-5 h-5" />,
    subtitle: 'Tactile Sonic Environments',
    description:
      'A continuous custom soundscape programmed for the apartment space—ambient frequencies, vinyl crackle, and raw industrial rhythm that ground the event.',
  },
  {
    id: 'warmth',
    name: 'Warmth & Smell',
    icon: <Flame className="w-5 h-5" />,
    subtitle: 'Intimate Atelier Atmosphere',
    description:
      'Stepping into Apartment 09 feels like entering an active workshop: warm lighting, steamed textiles, incense, and personal hospitality.',
  },
  {
    id: 'network',
    name: 'Creative Network',
    icon: <Users className="w-5 h-5" />,
    subtitle: 'People & Documentation',
    description:
      'A gathering place for independent designers, artists, students, and collectors in Poznań to converse, exchange ideas, and be documented in the event archive.',
  },
];

export const EventManifesto: React.FC = () => {
  const [activeSense, setActiveSense] = useState<string>(SENSE_ELEMENTS[0].id);

  const activeIndex = SENSE_ELEMENTS.findIndex((s) => s.id === activeSense);
  const currentSense = SENSE_ELEMENTS[activeIndex] || SENSE_ELEMENTS[0];

  return (
    <section id="theme" className="py-20 bg-brand-darker relative border-b-2 border-brand-yellow/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag & Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-brand-red text-white font-mono text-xs font-black uppercase mb-4 shadow-brutal-white">
            <span>EVENT MANIFESTO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-mono font-black tracking-tight text-white uppercase leading-tight">
            A one-day collision of <span className="text-brand-yellow">garments</span>, <span>paintings</span>, <span className="text-brand-red">objects</span>, sound and people.
          </h2>

          <p className="mt-4 font-mono text-sm sm:text-base text-zinc-400">
            Clothes, Art, Sound, Warmth, Smell, and Creative Fashion Network.
          </p>
        </div>

        {/* Sensory Dimension Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {SENSE_ELEMENTS.map((item) => {
            const isSelected = activeSense === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSense(item.id)}
                type="button"
                className={`font-mono text-xs font-bold uppercase px-4 py-2.5 border-2 transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'border-brand-yellow bg-brand-yellow text-black shadow-brutal-white font-black'
                    : 'border-zinc-700 bg-brand-card text-zinc-400 hover:text-white hover:border-zinc-500'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Sensory Showcase Card */}
        <div className="bg-brand-card border-4 border-black p-6 sm:p-10 shadow-brutal-yellow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b-2 border-zinc-800 gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-brand-yellow text-black">
                {currentSense.icon}
              </div>
              <div>
                <h3 className="font-mono text-xl sm:text-2xl font-black uppercase text-white">
                  {currentSense.name}
                </h3>
                <p className="font-mono text-xs text-brand-yellow font-bold uppercase tracking-wider">
                  {currentSense.subtitle}
                </p>
              </div>
            </div>
            <span className="font-mono text-xs text-zinc-500 font-bold tracking-widest uppercase">
              DIMENSION 0{activeIndex + 1}
            </span>
          </div>

          <p className="font-mono text-sm sm:text-base text-zinc-300 leading-relaxed pt-2">
            {currentSense.description}
          </p>
        </div>
      </div>
    </section>
  );
};
