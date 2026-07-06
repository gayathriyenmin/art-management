import React, { useEffect, useState } from 'react';
import { useInView, motion } from 'framer-motion';
import { Users, GraduationCap, Briefcase, Palette } from 'lucide-react';
import { STATS } from '../../../constants';
import bgStatistics from '../../../assets/images/bg-statistics.jpg';

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
    <span ref={ref} className="text-4xl md:text-5xl font-black font-heading text-white tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

// Map stat IDs to appropriate Lucide icons with custom tailwind styles
const getStatIcon = (id: string) => {
  switch (id) {
    case 'stat-1':
      return {
        icon: <Users className="w-6 h-6 text-violet-400" />,
        bg: 'bg-violet-500/10 border-violet-500/20 group-hover:bg-violet-500/25 group-hover:border-violet-500/40'
      };
    case 'stat-2':
      return {
        icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
        bg: 'bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/25 group-hover:border-purple-500/40'
      };
    case 'stat-3':
      return {
        icon: <Briefcase className="w-6 h-6 text-pink-400" />,
        bg: 'bg-pink-500/10 border-pink-500/20 group-hover:bg-pink-500/25 group-hover:border-pink-500/40'
      };
    case 'stat-4':
      return {
        icon: <Palette className="w-6 h-6 text-cyan-400" />,
        bg: 'bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/25 group-hover:border-cyan-500/40'
      };
    default:
      return {
        icon: <Users className="w-6 h-6 text-primary" />,
        bg: 'bg-slate-50 border-slate-100'
      };
  }
};

export const Statistics: React.FC = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden bg-cover bg-center border-y border-slate-900"
      style={{ backgroundImage: `url(${bgStatistics})` }}
    >
      {/* Black semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {STATS.map((stat, index) => {
            const { icon, bg } = getStatIcon(stat.id);
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center justify-between p-8 rounded-3xl bg-transparent border-2 border-white/15 hover:border-white/35 hover:bg-white/5 transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className={`mb-5 p-4 rounded-2xl border transition-all duration-300 ${bg}`}>
                  {icon}
                </div>

                {/* Number and Label */}
                <div className="flex flex-col gap-1 items-center text-center">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors mt-2">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
