export interface EventDetails {
  title: string;
  description: string;
  location: string;
  startDate: string; // ISO format or YYYYMMDDTHHmmss
  endDate: string;
}

export const EVENT_DETAILS: EventDetails = {
  title: 'Amine Woods x Mothrland Atelier POP UP',
  description: 'A one-day collision of garments, paintings, objects, sound and people. Free entry.',
  location: 'Mothrland Atelier, 28 Czerwca 1956 Roku 128, Apartment 09, Poznań, Poland',
  startDate: '20261114T140000Z',
  endDate: '20261114T200000Z',
};

export const generateIcsContent = (event: EventDetails = EVENT_DETAILS): string => {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Amine Woods x Mothrland Atelier//POP UP Event//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    `DTSTART:${event.startDate}`,
    `DTEND:${event.endDate}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
};

export const downloadIcsFile = (event: EventDetails = EVENT_DETAILS): void => {
  const icsData = generateIcsContent(event);
  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'amine-woods-popup-poznan.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const getGoogleCalendarUrl = (event: EventDetails = EVENT_DETAILS): string => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    details: event.description,
    location: event.location,
    dates: `${event.startDate}/${event.endDate}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};
