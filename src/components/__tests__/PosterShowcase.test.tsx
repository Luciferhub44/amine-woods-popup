import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PosterShowcase } from '../PosterShowcase';

describe('PosterShowcase', () => {
  it('renders section title and poster options', () => {
    render(<PosterShowcase />);

    expect(screen.getByText(/The Dual/i)).toBeInTheDocument();
    const nightButtons = screen.getAllByText('Night / Rave Edition');
    expect(nightButtons.length).toBeGreaterThanOrEqual(1);
    const editorialButtons = screen.getAllByText('Editorial / Riso Edition');
    expect(editorialButtons.length).toBeGreaterThanOrEqual(1);
  });

  it('switches to Editorial / Riso Edition when clicked', () => {
    render(<PosterShowcase />);

    const tabButtons = screen.getAllByRole('button', { name: /Editorial \/ Riso Edition/i });
    fireEvent.click(tabButtons[0]);

    const editions = screen.getAllByText('FINAL POSTER 02');
    expect(editions.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Risograph-style tactile yellow poster/i)).toBeInTheDocument();
  });

  it('opens and closes lightbox modal', () => {
    render(<PosterShowcase />);

    const inspectBtn = screen.getByText('INSPECT POSTER');
    fireEvent.click(inspectBtn);

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    const closeBtn = screen.getByLabelText('Close modal');
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
