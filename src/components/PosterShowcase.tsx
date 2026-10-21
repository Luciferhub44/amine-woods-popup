import React, { useState } from 'react';
import { Eye, Download, Maximize2, X, Sparkles, Layers } from 'lucide-react';

interface Poster {
  id: string;
  name: string;
  edition: string;
  imageSrc: string;
  pdfSrc: string;
  description: string;
  tags: string[];
  specs: {
    format: string;
    colors: string;
    dimensions: string;
    vibe: string;
  };
}

const POSTERS: Poster[] = [
  {
    id: 'poster-1',
    name: 'Night / Rave Edition',
    edition: 'FINAL POSTER 01',
    imageSrc: '/assets/poster-night.png',
    pdfSrc: '/assets/poster-night.pdf',
    description:
      'High-contrast neo-brutalist graphic with deep cosmic starburst textures, 3D extruded yellow POP UP typography, and warning-red event ribbons.',
    tags: ['Neo-Brutalist', 'Starfield Texture', '3D Extrusion', 'Free Entry'],
    specs: {
      format: 'Full Color Print & Digital Billboard',
      colors: 'Obsidian Black (#060708), Acid Yellow (#FFE500), Crimson Red (#FF2A1E)',
      dimensions: '2250 × 2250 px (Square Master)',
      vibe: 'Underground Avant-Garde Rave',
    },
  },
  {
    id: 'poster-2',
    name: 'Editorial / Riso Edition',
    edition: 'FINAL POSTER 02',
    imageSrc: '/assets/poster-editorial.png',
    pdfSrc: '/assets/poster-editorial.pdf',
    description:
      'Risograph-style tactile yellow poster featuring subtle hand-drawn fashion figure illustrations, garment manifesto, and the complete showroom program.',
    tags: ['Editorial', 'Riso Print', 'Garment Manifesto', 'Hand-Drawn Sketches'],
    specs: {
      format: 'Exhibition Handout & Atelier Program',
      colors: 'Riso Solar Yellow (#ECD636), Ink Black, Safety Red Pill',
      dimensions: '2250 × 2250 px (Square Master)',
      vibe: 'Tactile Atelier & Design Documentation',
    },
  },
];

export const PosterShowcase: React.FC = () => {
  const [activePosterId, setActivePosterId] = useState<string>('poster-1');
  const [modalPoster, setModalPoster] = useState<Poster | null>(null);

  const activePoster = POSTERS.find((p) => p.id === activePosterId) || POSTERS[0];

  return (
    <section id="posters" className="py-20 bg-brand-dark relative border-b-2 border-brand-yellow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b-2 border-zinc-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow text-black font-mono text-xs font-black uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>OFFICIAL EVENT ARTWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-black tracking-tight text-white uppercase">
              The Dual <span className="text-brand-yellow">Posters</span>
            </h2>
            <p className="text-zinc-400 font-mono text-sm max-w-xl mt-2">
              Designed as complementary artifacts: the dark street flyer and the editorial riso program.
            </p>
          </div>

          {/* Poster Tab Selector */}
          <div className="flex items-center gap-2 bg-brand-card p-1.5 border-2 border-zinc-700">
            {POSTERS.map((poster) => (
              <button
                key={poster.id}
                onClick={() => setActivePosterId(poster.id)}
                type="button"
                className={`font-mono text-xs font-black uppercase px-4 py-2.5 transition-all ${
                  activePosterId === poster.id
                    ? 'bg-brand-yellow text-black shadow-brutal-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {poster.name}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Poster Preview Frame */}
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden border-4 border-black bg-black shadow-brutal-yellow transition-transform duration-300">
              <img
                src={activePoster.imageSrc}
                alt={activePoster.name}
                className="w-full aspect-square object-contain bg-zinc-950 cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
                onClick={() => setModalPoster(activePoster)}
              />

              {/* Overlay hover action */}
              <div
                onClick={() => setModalPoster(activePoster)}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 cursor-pointer"
              >
                <div className="p-3 bg-brand-yellow text-black rounded-none border-2 border-black">
                  <Maximize2 className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-black uppercase tracking-wider text-white">
                  CLICK TO VIEW FULL RESOLUTION (2250 × 2250)
                </span>
              </div>
            </div>

            {/* Poster Quick Switcher Previews */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {POSTERS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePosterId(p.id)}
                  type="button"
                  className={`flex items-center gap-3 p-2 border-2 text-left transition-all ${
                    activePosterId === p.id
                      ? 'border-brand-yellow bg-brand-yellow/10'
                      : 'border-zinc-800 bg-brand-card hover:border-zinc-600'
                  }`}
                >
                  <img src={p.imageSrc} alt={p.name} className="w-12 h-12 object-cover border border-black" />
                  <div className="overflow-hidden">
                    <div className="font-mono text-xs font-bold truncate text-white">{p.name}</div>
                    <div className="font-mono text-[10px] text-zinc-400 uppercase">{p.edition}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Poster Details & Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-block font-mono text-xs font-bold text-brand-yellow tracking-widest uppercase">
                {activePoster.edition}
              </div>
              <h3 className="font-mono text-2xl sm:text-3xl font-black uppercase text-white">
                {activePoster.name}
              </h3>
              <p className="text-zinc-300 font-mono text-sm leading-relaxed">
                {activePoster.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activePoster.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 bg-brand-card border border-zinc-700 text-zinc-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Specifications Bento */}
            <div className="bg-brand-card border-2 border-zinc-800 p-5 space-y-3 font-mono text-xs">
              <div className="text-zinc-400 font-bold uppercase tracking-widest text-[11px] pb-2 border-b border-zinc-800 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
                <span>SPECIFICATIONS</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-900">
                <span className="text-zinc-400">Dimensions:</span>
                <span className="text-white font-bold">{activePoster.specs.dimensions}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-900">
                <span className="text-zinc-400">Vibe:</span>
                <span className="text-brand-yellow font-bold">{activePoster.specs.vibe}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-900">
                <span className="text-zinc-400">Palette:</span>
                <span className="text-zinc-200 text-right">{activePoster.specs.colors}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">Application:</span>
                <span className="text-zinc-200">{activePoster.specs.format}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setModalPoster(activePoster)}
                type="button"
                className="flex-1 flex items-center justify-center gap-2 bg-brand-yellow hover:bg-brand-yellowHover text-black font-mono font-black text-xs uppercase px-5 py-3.5 border-2 border-black shadow-brutal-white transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>INSPECT POSTER</span>
              </button>

              <a
                href={activePoster.pdfSrc}
                download
                className="flex items-center justify-center gap-2 bg-brand-card hover:bg-zinc-800 text-white font-mono font-bold text-xs uppercase px-5 py-3.5 border-2 border-zinc-700 hover:border-brand-yellow transition-colors"
              >
                <Download className="w-4 h-4 text-brand-yellow" />
                <span>DOWNLOAD PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalPoster && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setModalPoster(null)}
              type="button"
              className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white font-mono text-xs flex items-center gap-2 bg-brand-card border border-zinc-700"
              aria-label="Close modal"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4" />
            </button>

            <img
              src={modalPoster.imageSrc}
              alt={modalPoster.name}
              className="max-h-[80vh] w-auto max-w-full object-contain border-4 border-brand-yellow shadow-2xl"
            />

            <div className="mt-4 flex items-center justify-between w-full max-w-md font-mono text-xs text-zinc-300">
              <span className="font-bold">{modalPoster.name}</span>
              <a
                href={modalPoster.pdfSrc}
                download
                className="flex items-center gap-1.5 text-brand-yellow hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save High-Res PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
