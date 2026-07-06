import React from 'react';
import { Palette } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Items Found',
  description = 'Try adjusting your search query or filters to find what you are looking for.',
  icon,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center max-w-md mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 border border-primary/10">
        {icon || <Palette size={32} />}
      </div>
      <h3 className="text-lg font-bold text-secondary mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
};

export default EmptyState;
