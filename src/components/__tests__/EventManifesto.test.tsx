import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EventManifesto } from '../EventManifesto';

describe('EventManifesto', () => {
  it('renders theme headline and manifesto statement without color section', () => {
    render(<EventManifesto />);

    expect(screen.getByText(/A one-day collision of/i)).toBeInTheDocument();
    expect(screen.getByText(/Clothes, Art, Sound, Warmth, Smell/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^Color$/i })).not.toBeInTheDocument();
  });

  it('changes active dimension on button click', () => {
    render(<EventManifesto />);

    const artButton = screen.getByRole('button', { name: /Art/i });
    fireEvent.click(artButton);

    expect(screen.getByText(/DIMENSION 02/i)).toBeInTheDocument();
    expect(screen.getByText(/Raw canvas works hanging alongside clothing racks/i)).toBeInTheDocument();
  });
});
