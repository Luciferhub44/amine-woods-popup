import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GarmentLanguage } from '../GarmentLanguage';

describe('GarmentLanguage', () => {
  it('renders section title and list of principles', () => {
    render(<GarmentLanguage />);

    expect(screen.getByText(/Garment/i)).toBeInTheDocument();
    expect(screen.getByText('UPCYCLED FABRICS')).toBeInTheDocument();
    expect(screen.getByText('NUMBERED PIECES')).toBeInTheDocument();
  });

  it('filters principles by category', () => {
    render(<GarmentLanguage />);

    const craftFilter = screen.getByRole('button', { name: 'Craft' });
    fireEvent.click(craftFilter);

    expect(screen.getByText('TORN / REPAIRED HEMS')).toBeInTheDocument();
    expect(screen.queryByText('UPCYCLED FABRICS')).not.toBeInTheDocument();
  });

  it('toggles expansion detail on card click', () => {
    render(<GarmentLanguage />);

    const numberedCard = screen.getByText('NUMBERED PIECES');
    fireEvent.click(numberedCard);

    expect(screen.getByText(/Every single piece released at the pop-up carries a registered edition number/i)).toBeInTheDocument();
  });
});
