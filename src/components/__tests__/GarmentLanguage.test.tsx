import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GarmentLanguage } from '../GarmentLanguage';

describe('GarmentLanguage', () => {
  it('renders section title and list of principles', () => {
    render(<GarmentLanguage />);

    expect(screen.getByRole('heading', { name: /Garment/i })).toBeInTheDocument();
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

  it('renders principle details clearly', () => {
    render(<GarmentLanguage />);

    expect(screen.getByText(/Every single piece released at the pop-up carries a registered edition number/i)).toBeInTheDocument();
  });
});
