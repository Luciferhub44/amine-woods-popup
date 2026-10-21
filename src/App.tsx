import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { PosterShowcase } from './components/PosterShowcase';
import { EventManifesto } from './components/EventManifesto';
import { GarmentLanguage } from './components/GarmentLanguage';
import { InTheRoom } from './components/InTheRoom';
import { LocationGuide } from './components/LocationGuide';
import { Footer } from './components/Footer';
import { RsvpPassModal } from './components/RsvpPassModal';

export const App: React.FC = () => {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const handleOpenRsvp = () => setIsRsvpOpen(true);
  const handleCloseRsvp = () => setIsRsvpOpen(false);

  return (
    <div className="min-h-screen bg-brand-darker text-white flex flex-col font-sans selection:bg-brand-yellow selection:text-black">
      {/* Sticky Header Navigation */}
      <Navbar onOpenRsvp={handleOpenRsvp} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Stage with 3D Pop Up Graphics & Countdown */}
        <Hero onOpenRsvp={handleOpenRsvp} />

        {/* Dynamic Yellow Ticker */}
        <MarqueeBanner theme="yellow" />

        {/* Dual Posters Interactive Exhibition */}
        <PosterShowcase />

        {/* Red Reverse Marquee */}
        <MarqueeBanner
          theme="red"
          reverse
          items={[
            'CLOTHES',
            'ART',
            'SOUND',
            'COLOR',
            'WARMTH',
            'SMELL',
            'CREATIVE FASHION NETWORK',
            'POZNAŃ',
            '14 NOV',
          ]}
        />

        {/* Event Theme & Philosophical Manifesto */}
        <EventManifesto />

        {/* Garment Language: 10 Construction Rules */}
        <GarmentLanguage />

        {/* Dark Ticker */}
        <MarqueeBanner
          theme="dark"
          items={[
            'REWORKED GARMENTS',
            'SENAMIE PAINTINGS',
            'PHONE POUCHES',
            'ONE-OF-ONE PIECES',
            'WORKSHOP OBJECTS',
            'DOCUMENTATION',
          ]}
        />

        {/* In The Room: Showroom Catalog */}
        <InTheRoom />

        {/* Venue, Maps, and Wayfinding */}
        <LocationGuide />
      </main>

      {/* Footer */}
      <Footer />

      {/* Digital Guest Pass RSVP Modal */}
      <RsvpPassModal
        isOpen={isRsvpOpen}
        onClose={handleCloseRsvp}
      />
    </div>
  );
};

export default App;
