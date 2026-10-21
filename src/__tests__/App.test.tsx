import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { App } from '../App';

vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

describe('App', () => {
  it('renders all primary sections of the landing page', () => {
    render(<App />);

    // Header & Hero
    const amineWoodsMatches = screen.getAllByText(/Amine Woods/i);
    expect(amineWoodsMatches.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByAltText('POP')).toBeInTheDocument();
    expect(screen.getByAltText('UP')).toBeInTheDocument();

    // Posters
    expect(screen.getByText(/The Dual/i)).toBeInTheDocument();

    // Manifesto
    expect(screen.getByText(/A one-day collision of/i)).toBeInTheDocument();

    // Garment Language heading
    expect(screen.getByRole('heading', { name: /Garment Language/i })).toBeInTheDocument();

    // In The Room heading
    expect(screen.getByRole('heading', { name: /In The Room/i })).toBeInTheDocument();

    // Location heading
    expect(screen.getByRole('heading', { name: /Finding Apartment 09/i })).toBeInTheDocument();
  });

  it('opens and closes RSVP modal from Navbar action', () => {
    render(<App />);

    const openBtns = screen.getAllByText('FREE PASS');
    fireEvent.click(openBtns[0]);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Register for Free Entry')).toBeInTheDocument();

    const closeBtn = screen.getByLabelText('Close pass modal');
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
