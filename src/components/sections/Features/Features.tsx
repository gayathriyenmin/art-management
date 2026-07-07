import React from 'react';
import { SectionTitle } from '../../common/SectionTitle';
import { AchievementCard } from '../../cards/AchievementCard';
import { ACHIEVEMENTS } from '../../../constants';

export const Features: React.FC = () => {
  return (
    <section className="pb-20 md:pb-28 bg-bg-base relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          badge="Why Choose Us"
          title="Elevating Artistic Standards"
          subtitle="Discover how our premium resources, master instruction, and global alumni networks set us apart as an industry leader."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((ach) => (
            <AchievementCard key={ach.id} achievement={ach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
