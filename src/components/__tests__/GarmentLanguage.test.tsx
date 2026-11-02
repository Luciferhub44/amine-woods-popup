import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GarmentLanguage } from '../GarmentLanguage';

describe('GarmentLanguage', () => {
  it('renders section title and list of principles', () => {
    render(<GarmentLanguage />);

    expect(screen.getByRole('heading', { name: /Garment/i })).toBeInTheDocument();
    expect(screen.getByText('UPCYCLED FABRICS')).toBeInTheDocument();
    expect(screen.getByText('ONE-OFF DETAILS')).toBeInTheDocument();

    // Verify 07 - 10 are removed
    expect(screen.queryByText('ALTERED PROPORTIONS')).not.toBeInTheDocument();
    expect(screen.queryByText('UTILITY, INTERRUPTED')).not.toBeInTheDocument();
    expect(screen.queryByText('WORN TEXTURE')).not.toBeInTheDocument();
    expect(screen.queryByText('NUMBERED PIECES')).not.toBeInTheDocument();
  });

  it('filters principles by category', () => {
    render(<GarmentLanguage />);

    const craftFilter = screen.getByRole('button', { name: 'Craft' });
    fireEvent.click(craftFilter);

    expect(screen.getByText('TORN / REPAIRED HEMS')).toBeInTheDocument();
    expect(screen.queryByText('UPCYCLED FABRICS')).not.toBeInTheDocument();
  });

  it('renders principle details clearly', () => {
    render(<GarmentLanguage />);

    expect(screen.getByText(/No virgin textiles are consumed—each roll carries a documented past/i)).toBeInTheDocument();
  });
});
