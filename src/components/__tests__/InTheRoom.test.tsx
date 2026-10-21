import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InTheRoom } from '../InTheRoom';

describe('InTheRoom', () => {
  it('renders exhibition title and items', () => {
    render(<InTheRoom />);

    expect(screen.getByText(/In The/i)).toBeInTheDocument();
    expect(screen.getByText('A2 ORIGINAL PAINTINGS BY SENAMIE')).toBeInTheDocument();
    expect(screen.getByText('OFFCUT PHONE POUCHES')).toBeInTheDocument();
  });

  it('updates spotlight card when an item is selected', () => {
    render(<InTheRoom />);

    const senamieItem = screen.getByText('A2 ORIGINAL PAINTINGS BY SENAMIE');
    fireEvent.click(senamieItem);

    expect(screen.getByText(/A curated suite of raw expressionist pigment works on A2 unprimed canvas/i)).toBeInTheDocument();
    expect(screen.getByText(/A2 dimensions \(420 × 594 mm\)/i)).toBeInTheDocument();
  });
});
