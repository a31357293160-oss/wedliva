"use client";

import { useEffect, useState } from "react";

function getRemaining(target: number) {
  const difference = Math.max(0, target - Date.now());
  const totalSeconds = Math.floor(difference / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60
  };
}

export default function Countdown({ date }: { date: string }) {
  const [remaining, setRemaining] = useState(() => getRemaining(new Date(date).getTime()));

  useEffect(() => {
    const target = new Date(date).getTime();
    const timer = window.setInterval(() => {
      setRemaining(getRemaining(target));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [date]);

  const units = [
    ["Days", remaining.days],
    ["Hours", remaining.hours],
    ["Minutes", remaining.minutes],
    ["Seconds", remaining.seconds]
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {units.map(([label, value]) => (
        <div key={label} className="glass rounded-2xl px-2 py-4 text-center">
          <div className="font-display text-2xl font-semibold text-espresso sm:text-3xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[9px] uppercase tracking-[0.22em] text-espresso/55">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
