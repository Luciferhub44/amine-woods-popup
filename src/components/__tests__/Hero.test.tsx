import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Hero } from '../Hero';

describe('Hero', () => {
  it('renders collaborator names and confirms POP UP and Fashion & Art are removed', () => {
    render(<Hero onOpenRsvp={vi.fn()} />);

    expect(screen.getByRole('heading', { name: /AMINE WOODS/i })).toBeInTheDocument();
    expect(screen.getByText(/MOTHRLAND ATELIER/i)).toBeInTheDocument();

    // Verify Fashion & Art and POP UP are removed entirely
    expect(screen.queryByText('FASHION & ART')).not.toBeInTheDocument();
    expect(screen.queryByText(/POP UP/i)).not.toBeInTheDocument();
    expect(screen.queryByAltText('POP')).not.toBeInTheDocument();
    expect(screen.queryByAltText('UP')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Fashion & Art')).not.toBeInTheDocument();
  });

  it('does not render CLAIM FREE PASS button and renders calendar actions', () => {
    render(<Hero />);

    expect(screen.queryByText(/CLAIM FREE PASS/i)).not.toBeInTheDocument();
    expect(screen.getByText('.ICS')).toBeInTheDocument();
    expect(screen.getByText('GOOGLE CAL')).toBeInTheDocument();
  });

  it('renders event date and location badges', () => {
    render(<Hero onOpenRsvp={vi.fn()} />);
    expect(screen.getByText(/NOV 14, 2026/i)).toBeInTheDocument();
    expect(screen.getByText(/14:00 TO 20:00 CET/i)).toBeInTheDocument();
    expect(screen.getByText(/POZNAŃ • APT 09/i)).toBeInTheDocument();
  });
});
