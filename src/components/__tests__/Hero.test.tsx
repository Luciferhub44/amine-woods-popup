import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Hero } from '../Hero';

describe('Hero', () => {
  it('renders title elements and collaborator names', () => {
    render(<Hero onOpenRsvp={vi.fn()} />);

    expect(screen.getByAltText('POP')).toBeInTheDocument();
    expect(screen.getByAltText('UP')).toBeInTheDocument();
    expect(screen.getByText(/BY AMINE WOODS/i)).toBeInTheDocument();
    expect(screen.getByText(/MOTHRLAND ATELIER/i)).toBeInTheDocument();
  });

  it('triggers onOpenRsvp on CTA button click', () => {
    const handleRsvp = vi.fn();
    render(<Hero onOpenRsvp={handleRsvp} />);

    const ctaButton = screen.getByText('CLAIM FREE PASS');
    fireEvent.click(ctaButton);
    expect(handleRsvp).toHaveBeenCalledTimes(1);
  });

  it('renders event date and location badges', () => {
    render(<Hero onOpenRsvp={vi.fn()} />);
    expect(screen.getByText(/NOV 14, 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/14:00 TO 20:00 CET/i)).toBeInTheDocument();
    expect(screen.getByText(/POZNAŃ • APT 09/i)).toBeInTheDocument();
  });
});
