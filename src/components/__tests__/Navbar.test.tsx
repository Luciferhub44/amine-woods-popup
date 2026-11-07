import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  it('renders branding and navigation links', () => {
    const handleOpenRsvp = vi.fn();
    render(<Navbar onOpenRsvp={handleOpenRsvp} />);

    const logo = screen.getByAltText('Amine Woods') as HTMLImageElement;
    expect(logo).toBeInTheDocument();
    expect(logo.src).toContain('/assets/Amine_Logo.png');
    expect(screen.queryByText('AW')).not.toBeInTheDocument();
    expect(screen.getByText('Posters')).toBeInTheDocument();
    expect(screen.getByText('Garment Language')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
  });

  it('does not render FREE PASS button', () => {
    render(<Navbar />);
    expect(screen.queryByText('FREE PASS')).not.toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Navbar onOpenRsvp={vi.fn()} />);

    const toggleBtn = screen.getByLabelText('Toggle menu');
    fireEvent.click(toggleBtn);
    expect(screen.getByText('14 November • 14:00 - 20:00')).toBeInTheDocument();
  });
});
