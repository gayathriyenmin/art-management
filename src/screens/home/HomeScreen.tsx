import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Hero,
  Features,
  CTA,
  Statistics,
  Courses,
  GallerySection,
  AboutSection,
  FAQSection,
  TestimonialsSection,
  ContactSection,
  RegistrationSection
} from '../../components/sections';

export const HomeScreen: React.FC = () => {
  return (
    <>
      {/* SEO Title */}
      <Helmet>
        <title>Academy | Premium Fine Art & Digital Art School</title>
        <meta
          name="description"
          content="Discover Academy, the leading fine art and digital illustration institute. Learn oil painting, digital art, sculpting, and concept art under master guidance."
        />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Courses Section */}
      <Courses />

      {/* Why Choose Us & Achievements (handled by Features section) */}
      <Features />


      {/* Gallery Section */}
      <GallerySection />
      {/* Statistics Counter */}
      <Statistics />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Call To Action */}
      <CTA />

      {/* FAQ Section */}
      <FAQSection />

      {/* Registration Section */}
      <RegistrationSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default HomeScreen;
