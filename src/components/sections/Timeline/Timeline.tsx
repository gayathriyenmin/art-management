import React from 'react';
import { SectionTitle } from '../../common/SectionTitle';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const EVENTS: TimelineEvent[] = [
  { year: '2016', title: 'Academy Foundation', description: 'Established with just two painting studios and 40 passionate classical students.' },
  { year: '2019', title: 'Digital Arts Wing', description: 'Expanded the syllabus to include high-end digital illustration and 3D modeling.' },
  { year: '2022', title: 'Global Recognition', description: 'Accredited by international design guilds, launching student exchange programs.' },
  { year: '2026', title: '  Exhibition Hall', description: 'Inaugurated our physical-digital gallery space in the art district.' }
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          badge="Our History"
          title="A Decade of Creative Legacy"
          subtitle="Follow our journey from a small fine arts atelier to a state-of-the-art academy."
        />

        <div className="relative border-l border-slate-200 ml-4 md:ml-0 md:left-1/2 md:border-l-0 md:after:content-[''] md:after:absolute md:after:top-0 md:after:bottom-0 md:after:left-1/2 md:after:w-0.5 md:after:bg-slate-200">
          {EVENTS.map((event, idx) => (
            <div
              key={idx}
              className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Dot */}
              <div className="absolute left-[-25px] md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center font-heading font-bold text-xs text-secondary shadow-md z-10">
                {event.year}
              </div>

              {/* Box */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-border-color hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <h3 className="font-heading font-bold text-lg md:text-xl text-secondary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
