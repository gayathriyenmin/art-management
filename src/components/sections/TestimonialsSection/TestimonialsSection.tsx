import React from 'react';
import { TestimonialCard } from '../../cards/TestimonialCard';
import { SectionTitle } from '../../common/SectionTitle';
import { TESTIMONIALS } from '../../../constants';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-[60px] md:py-[80px] lg:py-[150px] bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          badge="Reviews"
          title="Real Outcomes, Real Stories"
          subtitle="Our student body comes from diverse backgrounds, but they share a dedication to artistic quality."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <TestimonialCard key={test.id} testimonial={test} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
