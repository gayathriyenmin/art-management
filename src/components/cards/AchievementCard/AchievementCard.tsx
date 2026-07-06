import React from 'react';
import * as Icons from 'lucide-react';

interface AchievementCardProps {
  achievement: {
    title: string;
    desc: string;
    icon: string;
  };
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  // Dynamically resolve lucide icon
  const IconComponent = (Icons as any)[achievement.icon] || Icons.HelpCircle;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border border-border-color/60 shadow-sm flex flex-col text-left hover:shadow-md transition-all duration-300 relative overflow-hidden group">
      {/* Icon Wrapper */}
      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-primary/10">
        <IconComponent size={24} />
      </div>

      {/* Details */}
      <h3 className="font-heading font-bold text-lg md:text-xl text-secondary mb-2 group-hover:text-primary transition-colors">
        {achievement.title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed">
        {achievement.desc}
      </p>

      {/* Decorative gradient corner */}
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-tr from-primary/5 to-highlight/5 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-all duration-500" />
    </div>
  );
};

export default AchievementCard;
