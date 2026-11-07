import { describe, it, expect, vi } from 'vitest';
import { generateIcsContent, getGoogleCalendarUrl, getAppleCalendarUrl, downloadIcsFile } from '../calendar';

describe('calendar utility', () => {
  it('generates valid ICS content with event details and required RFC 5545 properties', () => {
    const ics = generateIcsContent();
    expect(ics).toContain('BEGIN:VCALENDAR');
    expect(ics).toContain('UID:amine-woods-mothrland-popup-20261114@aminewoods.com');
    expect(ics).toContain('DTSTAMP:');
    expect(ics).toContain('SUMMARY:Amine Woods x Mothrland Atelier POP UP');
    expect(ics).toContain('LOCATION:Mothrland Atelier, 28 Czerwca 1956 Roku 128, Apartment 09, Poznań, Poland');
    expect(ics).toContain('END:VCALENDAR');
  });

  it('generates a valid Google Calendar URL', () => {
    const url = getGoogleCalendarUrl();
    expect(url).toContain('https://calendar.google.com/calendar/render');
    expect(url).toContain('Amine+Woods');
  });

  it('generates a webcal:// Apple Calendar URL on desktop and data:text/calendar on iOS', () => {
    const desktopUrl = getAppleCalendarUrl();
    expect(desktopUrl).toMatch(/^webcal:\/\/.*\/amine-woods-popup-poznan\.ics$/);
  });

  it('triggers calendar handoff without download attribute when calling downloadIcsFile', () => {
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    const appendSpy = vi.spyOn(document.body, 'appendChild');
    const removeSpy = vi.spyOn(document.body, 'removeChild');

    downloadIcsFile();

    expect(clickSpy).toHaveBeenCalled();
    expect(appendSpy).toHaveBeenCalled();
    const createdAnchor = appendSpy.mock.calls[0][0] as HTMLAnchorElement;
    expect(createdAnchor.hasAttribute('download')).toBe(false);
    expect(createdAnchor.href).toContain('webcal://');
    expect(removeSpy).toHaveBeenCalled();

    clickSpy.mockRestore();
    appendSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
