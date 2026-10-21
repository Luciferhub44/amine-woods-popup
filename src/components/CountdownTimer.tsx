import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

interface CountdownTimerProps {
  targetDate?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate = '2026-11-14T14:00:00+01:00',
}) => {
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mx-auto" data-testid="countdown-timer">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex-1 bg-brand-card/90 border-2 border-brand-yellow/80 rounded-none p-3 sm:p-4 text-center shadow-brutal-yellow transition-transform hover:-translate-y-1"
          >
            <div className="font-mono text-2xl sm:text-4xl lg:text-5xl font-black text-brand-yellow tracking-tighter">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mt-1">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-3 text-xs font-mono text-zinc-400">
        <span className="inline-block w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
        <span>DOORS OPEN NOV 14 AT 14:00 CET</span>
      </div>
    </div>
  );
};
