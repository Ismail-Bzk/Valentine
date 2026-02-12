'use client';

import { useMemo } from 'react';

type DayCounterProps = {
  since: string;
};

export function DayCounter({ since }: DayCounterProps) {
  const days = useMemo(() => {
    const start = new Date(since);
    const now = new Date();
    const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = nowDate.getTime() - startDate.getTime();
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  }, [since]);

  return (
    <div className="glass-panel inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm text-wine/90 shadow-romantic md:text-base">
      <span className="h-2 w-2 rounded-full bg-rose animate-soft-pulse" />
      {days} jours deja a s aimer depuis le {since}
    </div>
  );
}
