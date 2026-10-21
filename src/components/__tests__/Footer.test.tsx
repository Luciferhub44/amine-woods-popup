import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Footer } from '../Footer';

describe('Footer', () => {
  it('renders collaborator logos and details', () => {
    render(<Footer />);

    expect(screen.getByAltText('Amine Woods Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Mothrland Atelier Logo')).toBeInTheDocument();
    expect(screen.getByText('AMINE WOODS ATELIER')).toBeInTheDocument();
    expect(screen.getByText('MOTHRLAND ATELIER')).toBeInTheDocument();
    expect(screen.getByText('FREE ENTRY')).toBeInTheDocument();
  });

  it('scrolls to top when clicking BACK TO TOP button', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    render(<Footer />);

    const backToTopBtn = screen.getByText('BACK TO TOP');
    fireEvent.click(backToTopBtn);

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    scrollToSpy.mockRestore();
  });
});
