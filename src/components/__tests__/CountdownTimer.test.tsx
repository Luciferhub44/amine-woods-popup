import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CountdownTimer } from '../CountdownTimer';

describe('CountdownTimer', () => {
  it('renders days, hours, minutes, and seconds labels', () => {
    render(<CountdownTimer targetDate="2026-11-14T14:00:00+01:00" />);
    expect(screen.getByText('DAYS')).toBeInTheDocument();
    expect(screen.getByText('HOURS')).toBeInTheDocument();
    expect(screen.getByText('MINUTES')).toBeInTheDocument();
    expect(screen.getByText('SECONDS')).toBeInTheDocument();
  });

  it('renders the doors open notice', () => {
    render(<CountdownTimer />);
    expect(screen.getByText(/DOORS OPEN NOV 14 AT 14:00 CET/i)).toBeInTheDocument();
  });

  it('renders zeroes when target date has passed', () => {
    render(<CountdownTimer targetDate="2020-01-01T00:00:00Z" />);
    const zeroes = screen.getAllByText('00');
    expect(zeroes.length).toBeGreaterThanOrEqual(4);
  });
});
