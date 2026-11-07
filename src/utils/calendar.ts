export interface EventDetails {
  uid?: string;
  title: string;
  description: string;
  location: string;
  startDate: string; // ISO format or YYYYMMDDTHHmmssZ
  endDate: string;
}

export const EVENT_DETAILS: EventDetails = {
  uid: 'amine-woods-mothrland-popup-20261114@aminewoods.com',
  title: 'Amine Woods x Mothrland Atelier POP UP',
  description: 'A one-day collision of garments, paintings, objects, sound and people. Free entry.',
  location: 'Mothrland Atelier, 28 Czerwca 1956 Roku 128, Apartment 09, Poznań, Poland',
  startDate: '20261114T130000Z', // 14:00 CET (UTC+1)
  endDate: '20261114T190000Z',   // 20:00 CET (UTC+1)
};

export const generateIcsContent = (event: EventDetails = EVENT_DETAILS): string => {
  const uid = event.uid || 'amine-woods-mothrland-popup-20261114@aminewoods.com';
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Amine Woods x Mothrland Atelier//POP UP Event//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${event.title}`,
    'BEGIN:VEVENT',
    `UID:${uid}`,
    'DTSTAMP:20261106T120000Z',
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    `DTSTART:${event.startDate}`,
    `DTEND:${event.endDate}`,
    'SEQUENCE:0',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
};

export const getAppleCalendarUrl = (event: EventDetails = EVENT_DETAILS): string => {
  const isIos =
    typeof navigator !== 'undefined' &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

  if (isIos) {
    const icsData = generateIcsContent(event);
    return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsData)}`;
  }

  const host =
    typeof window !== 'undefined' && window.location?.host
      ? window.location.host
      : 'localhost:5173';

  return `webcal://${host}/amine-woods-popup-poznan.ics`;
};

export const downloadIcsFile = (event: EventDetails = EVENT_DETAILS): void => {
  const calendarUrl = getAppleCalendarUrl(event);
  const link = document.createElement('a');
  link.href = calendarUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
