import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  it('renders branding and navigation links', () => {
    const handleOpenRsvp = vi.fn();
    render(<Navbar onOpenRsvp={handleOpenRsvp} />);

    expect(screen.getByText(/Amine Woods/i)).toBeInTheDocument();
    expect(screen.getByText('Posters')).toBeInTheDocument();
    expect(screen.getByText('Garment Language')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
  });

  it('calls onOpenRsvp when FREE PASS button is clicked', () => {
    const handleOpenRsvp = vi.fn();
    render(<Navbar onOpenRsvp={handleOpenRsvp} />);

    const button = screen.getByText('FREE PASS');
    fireEvent.click(button);
    expect(handleOpenRsvp).toHaveBeenCalledTimes(1);
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Navbar onOpenRsvp={vi.fn()} />);

    const toggleBtn = screen.getByLabelText('Toggle menu');
    fireEvent.click(toggleBtn);
    expect(screen.getByText('14 November • 14:00 - 20:00')).toBeInTheDocument();
  });
});
