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
    expect(screen.getByRole('heading', { name: /AMINE WOODS/i })).toBeInTheDocument();

    // Posters
    expect(screen.getByText(/The Dual/i)).toBeInTheDocument();

    // Manifesto
    expect(screen.getByText(/A one-day collision of/i)).toBeInTheDocument();

    // Garment Language heading
    expect(screen.getByRole('heading', { name: /Garment Language/i })).toBeInTheDocument();

    // In The Room heading
    expect(screen.getByRole('heading', { name: /In The Room/i })).toBeInTheDocument();

    // Location heading
    expect(screen.getByRole('heading', { name: /The Location/i })).toBeInTheDocument();
  });

  it('confirms Free Pass and Claim Pass buttons are removed across the app', () => {
    render(<App />);

    expect(screen.queryByText('FREE PASS')).not.toBeInTheDocument();
    expect(screen.queryByText('CLAIM FREE PASS')).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
