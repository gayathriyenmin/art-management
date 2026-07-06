import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { STATS } from '../../../constants';

interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-black font-heading text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Statistics: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-secondary text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {STATS.map((stat) => (
          <div key={stat.id} className="flex flex-col gap-2.5 items-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
