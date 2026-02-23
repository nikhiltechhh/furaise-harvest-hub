import { useEffect, useRef, useState } from "react";

interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const ClientIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const ProjectIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>
);

const PartnerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0h3.15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.25a5.25 5.25 0 0010.5 0v-4.5m-6.3-3.75h6.3m0 0a1.575 1.575 0 013.15 0v3m-3.15-3v-2.25a1.575 1.575 0 013.15 0v2.25m0 0h1.5a1.5 1.5 0 010 3h-1.5" />
  </svg>
);

function StatItem({
  icon,
  value,
  suffix,
  label,
  delay,
  started,
  isLast,
}: Stat & { started: boolean; isLast: boolean }) {
  const [active, setActive] = useState(false);
  const count = useCountUp(value, 2000, active);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => setActive(true), delay);
    return () => clearTimeout(timer);
  }, [started, delay]);

  return (
    <div
      className={`group flex-1 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 py-5 px-3 md:px-6 hover:bg-slate-50 transition-colors duration-300 ${
        !isLast ? "border-r border-gray-200" : ""
      }`}
    >
      {/* Icon — shown on md+ */}
      <div className="hidden md:flex w-11 h-11 rounded-full bg-[#355233] items-center justify-center shrink-0 ring-2 ring-amber-400/30 group-hover:ring-amber-400/60 transition-all duration-300">
        <div className="text-amber-400">{icon}</div>
      </div>

      {/* Number + Label */}
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-baseline leading-none">
          <span className="font-black text-2xl md:text-3xl text-amber-500 tabular-nums">
            {count.toLocaleString()}
          </span>
          <span className="font-black text-xl md:text-2xl text-amber-500">{suffix}</span>
        </div>
        <p className="text-slate-400 text-[10px] md:text-xs font-semibold uppercase tracking-widest mt-1 text-center md:text-left whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  );
}

const stats: Stat[] = [
  { icon: <ClientIcon />, value: 20, suffix: "+", label: "Client", delay: 0 },
  { icon: <GlobeIcon />, value: 3, suffix: "+", label: "Nation", delay: 200 },
  { icon: <ProjectIcon />, value: 60, suffix: "+", label: "Project", delay: 400 },
  { icon: <PartnerIcon />, value: 10, suffix: "+", label: "Partners", delay: 600 },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-6 px-4">
      <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex flex-row w-full divide-x divide-gray-200">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              started={started}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}