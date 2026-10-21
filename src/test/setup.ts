import '@testing-library/jest-dom';
import { vi } from 'vitest';

if (typeof window !== 'undefined') {
  if (!window.URL.createObjectURL) {
    window.URL.createObjectURL = () => 'blob:mock-url';
  }
  if (!window.URL.revokeObjectURL) {
    window.URL.revokeObjectURL = () => {};
  }
  if (!window.scrollTo) {
    window.scrollTo = () => {};
  }
}

// Mock canvas-confetti to prevent jsdom canvas 2d context errors
vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));
