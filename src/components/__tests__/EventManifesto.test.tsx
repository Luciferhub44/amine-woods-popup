import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EventManifesto } from '../EventManifesto';

describe('EventManifesto', () => {
  it('renders theme headline and keywords', () => {
    render(<EventManifesto />);

    expect(screen.getByText(/A one-day collision of/i)).toBeInTheDocument();
    expect(screen.getByText(/\/ UPCYCLED GARMENTS \//i)).toBeInTheDocument();
    expect(screen.getByText(/\/ SAFETY PINS \//i)).toBeInTheDocument();
  });

  it('changes active dimension on button click', () => {
    render(<EventManifesto />);

    const artButton = screen.getByRole('button', { name: /Art A2 Original Paintings by Senamie/i });
    fireEvent.click(artButton);

    expect(screen.getByText('DIMENSION 02')).toBeInTheDocument();
    expect(screen.getByText(/Raw canvas works hanging alongside clothing racks/i)).toBeInTheDocument();
  });
});
