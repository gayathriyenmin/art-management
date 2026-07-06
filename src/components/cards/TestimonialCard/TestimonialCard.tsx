import React from 'react';
import { Quote, Star } from 'lucide-react';
import type { Testimonial } from '../../../interfaces';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-border-color shadow-md glass-card text-left flex flex-col h-full relative overflow-hidden group">
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-6 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
        <Quote size={80} className="transform rotate-180" />
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={
              index < testimonial.rating
                ? 'text-accent fill-accent'
                : 'text-slate-200 fill-slate-200'
            }
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-secondary text-sm md:text-base leading-relaxed mb-8 flex-grow font-normal">
        "{testimonial.content}"
      </p>

      {/* Profile */}
      <div className="flex items-center gap-4 mt-auto">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
        />
        <div className="flex flex-col gap-0.5">
          <h4 className="font-heading font-bold text-sm text-secondary">
            {testimonial.name}
          </h4>
          <span className="text-xs text-text-muted">
            {testimonial.role} &bull; <span className="text-primary font-semibold">{testimonial.courseName}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
