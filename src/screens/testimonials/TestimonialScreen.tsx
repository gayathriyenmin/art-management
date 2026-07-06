import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/layout/Header';
import { TestimonialCard } from '../../components/cards/TestimonialCard';
import { SectionTitle } from '../../components/common/SectionTitle';
import { TESTIMONIALS } from '../../constants';

export const TestimonialScreen: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Student Stories |   Academy</title>
        <meta name="description" content="Discover testimonials and success feedback from alumni of   Academy." />
      </Helmet>

      {/* Header Banner */}
      <Header
        title="Alumni Testimonials"
        subtitle="Hear directly from professional concept artists, exhibiting painters, and creative designers who began their careers in our studios."
      />

      {/* Testimonials Grid */}
      <section className="py-20 bg-white relative">
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
    </>
  );
};

export default TestimonialScreen;
