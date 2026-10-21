import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LocationGuide } from '../LocationGuide';

describe('LocationGuide', () => {
  it('renders address and venue details', () => {
    render(<LocationGuide />);

    expect(screen.getByRole('heading', { name: 'Mothrland Atelier' })).toBeInTheDocument();
    expect(screen.getByText(/28 CZERWCA 1956 ROKU 128/i)).toBeInTheDocument();
    const aptMatches = screen.getAllByText(/APARTMENT 09/i);
    expect(aptMatches.length).toBeGreaterThanOrEqual(1);
  });

  it('handles address copying', async () => {
    const writeTextSpy = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextSpy,
      },
    });

    render(<LocationGuide />);

    const copyBtn = screen.getByText('COPY ADDRESS');
    fireEvent.click(copyBtn);

    expect(writeTextSpy).toHaveBeenCalledWith('28 Czerwca 1956 Roku 128, Apartment 09, Poznań, Poland');
    await waitFor(() => {
      expect(screen.getByText('ADDRESS COPIED!')).toBeInTheDocument();
    });
  });
});
