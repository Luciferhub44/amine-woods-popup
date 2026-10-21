import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MarqueeBanner } from '../MarqueeBanner';

describe('MarqueeBanner', () => {
  it('renders provided items correctly', () => {
    const customItems = ['TEST ITEM A', 'TEST ITEM B'];
    render(<MarqueeBanner items={customItems} />);
    const matchesA = screen.getAllByText('TEST ITEM A');
    expect(matchesA.length).toBeGreaterThanOrEqual(1);
  });

  it('applies the red theme styling classes', () => {
    const { container } = render(<MarqueeBanner theme="red" />);
    const element = container.querySelector('[data-testid="marquee-banner"]');
    expect(element?.className).toContain('bg-brand-red');
  });

  it('applies reverse animation when reverse is true', () => {
    const { container } = render(<MarqueeBanner reverse />);
    const animatedChild = container.querySelector('.animate-marquee-reverse');
    expect(animatedChild).toBeInTheDocument();
  });
});
