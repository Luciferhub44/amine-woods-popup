import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PosterShowcase } from '../PosterShowcase';

describe('PosterShowcase', () => {
  it('renders section title and poster options', () => {
    render(<PosterShowcase />);

    expect(screen.getByText(/The Dual/i)).toBeInTheDocument();
    const heroButtons = screen.getAllByText('MAIN POSTER');
    expect(heroButtons.length).toBeGreaterThanOrEqual(1);
    const eventButtons = screen.getAllByText('MAIN EVENTS');
    expect(eventButtons.length).toBeGreaterThanOrEqual(1);
  });

  it('switches to MAIN EVENTS when clicked', () => {
    render(<PosterShowcase />);

    const tabButtons = screen.getAllByRole('button', { name: /MAIN EVENTS/i });
    fireEvent.click(tabButtons[0]);

    const editions = screen.getAllByText('FINAL POSTER 02');
    expect(editions.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Risograph-style tactile yellow poster/i)).toBeInTheDocument();
  });

  it('renders download PDF button without hashtags or specifications', () => {
    render(<PosterShowcase />);

    const downloadLink = screen.getByRole('link', { name: /download pdf/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', '/assets/poster-night.pdf');

    expect(screen.queryByText(/SPECIFICATIONS/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/INSPECT POSTER/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/#Neo-Brutalist/i)).not.toBeInTheDocument();
  });
});
