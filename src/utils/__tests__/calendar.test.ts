import { describe, it, expect, vi } from 'vitest';
import { generateIcsContent, getGoogleCalendarUrl, downloadIcsFile } from '../calendar';

describe('calendar utility', () => {
  it('generates valid ICS content with event details', () => {
    const ics = generateIcsContent();
    expect(ics).toContain('BEGIN:VCALENDAR');
    expect(ics).toContain('SUMMARY:Amine Woods x Mothrland Atelier POP UP');
    expect(ics).toContain('LOCATION:Mothrland Atelier, 28 Czerwca 1956 Roku 128, Apartment 09, Poznań, Poland');
    expect(ics).toContain('END:VCALENDAR');
  });

  it('generates a valid Google Calendar URL', () => {
    const url = getGoogleCalendarUrl();
    expect(url).toContain('https://calendar.google.com/calendar/render');
    expect(url).toContain('Amine+Woods');
  });

  it('triggers file download when calling downloadIcsFile', () => {
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    const appendSpy = vi.spyOn(document.body, 'appendChild');
    const removeSpy = vi.spyOn(document.body, 'removeChild');

    downloadIcsFile();

    expect(clickSpy).toHaveBeenCalled();
    expect(appendSpy).toHaveBeenCalled();
    expect(removeSpy).toHaveBeenCalled();

    clickSpy.mockRestore();
    appendSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
