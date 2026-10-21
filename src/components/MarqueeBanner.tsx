import React from 'react';

interface MarqueeBannerProps {
  items?: string[];
  theme?: 'yellow' | 'red' | 'dark';
  speed?: 'normal' | 'fast';
  reverse?: boolean;
}

const DEFAULT_ITEMS = [
  'UPCYCLED GARMENTS',
  'ART',
  'HANDMADE',
  'SAFETY PINS',
  'COLLECTIBLES',
  'ONE-OF-ONE PIECES',
  'SOUND',
  'PEOPLE',
  'DOCUMENTATION',
  'AMINE WOODS',
  'MOTHRLAND ATELIER',
  'POZNAŃ',
  'FREE ENTRY',
];

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items = DEFAULT_ITEMS,
  theme = 'yellow',
  reverse = false,
}) => {
  const getThemeClasses = () => {
    switch (theme) {
      case 'red':
        return 'bg-brand-red text-white border-y-2 border-black';
      case 'dark':
        return 'bg-brand-card text-brand-yellow border-y-2 border-brand-yellow/30';
      case 'yellow':
      default:
        return 'bg-brand-yellow text-black border-y-2 border-black font-black';
    }
  };

  const animClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';

  return (
    <div
      className={`w-full overflow-hidden select-none py-2.5 sm:py-3 relative flex items-center ${getThemeClasses()}`}
      data-testid="marquee-banner"
    >
      <div className={`flex shrink-0 items-center gap-6 whitespace-nowrap ${animClass}`}>
        {items.map((item, idx) => (
          <span key={`group-1-${idx}`} className="flex items-center gap-4 text-xs sm:text-sm font-mono uppercase tracking-wider font-extrabold">
            <span>{item}</span>
            <span className="opacity-60 text-base">✦</span>
          </span>
        ))}
      </div>
      <div className={`flex shrink-0 items-center gap-6 whitespace-nowrap ${animClass}`} aria-hidden="true">
        {items.map((item, idx) => (
          <span key={`group-2-${idx}`} className="flex items-center gap-4 text-xs sm:text-sm font-mono uppercase tracking-wider font-extrabold">
            <span>{item}</span>
            <span className="opacity-60 text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
