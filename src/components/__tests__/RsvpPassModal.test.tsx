import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { RsvpPassModal } from '../RsvpPassModal';

vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

describe('RsvpPassModal', () => {
  it('does not render when isOpen is false', () => {
    const { container } = render(<RsvpPassModal isOpen={false} onClose={vi.fn()} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders form and handles pass generation', () => {
    const handleClose = vi.fn();
    render(<RsvpPassModal isOpen={true} onClose={handleClose} />);

    expect(screen.getByText('Register for Free Entry')).toBeInTheDocument();

    const nameInput = screen.getByLabelText(/FULL NAME/i);
    fireEvent.change(nameInput, { target: { value: 'Kasia Nowak' } });

    const submitBtn = screen.getByText('GENERATE MY PASS');
    fireEvent.click(submitBtn);

    expect(screen.getByText('PASS CONFIRMED & READY')).toBeInTheDocument();
    expect(screen.getByText('Kasia Nowak')).toBeInTheDocument();
    expect(screen.getByText(/AW-ML-/i)).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = vi.fn();
    render(<RsvpPassModal isOpen={true} onClose={handleClose} />);

    const closeBtn = screen.getByLabelText('Close pass modal');
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
