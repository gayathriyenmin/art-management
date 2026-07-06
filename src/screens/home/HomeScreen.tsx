import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import {
  Hero,
  Features,
  CTA,
  Statistics,
  Newsletter
} from '../../components/sections';
import { CourseCard } from '../../components/cards/CourseCard';
import { InstructorCard } from '../../components/cards/InstructorCard';
import { TestimonialCard } from '../../components/cards/TestimonialCard';
import { GalleryCard } from '../../components/cards/GalleryCard';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Button } from '../../components/common/Button';
import { COURSES, INSTRUCTORS, GALLERY_ITEMS, TESTIMONIALS, WORKSHOPS, ROUTES } from '../../constants';

export const HomeScreen: React.FC = () => {
  // Take first 3 courses for preview
  const featuredCourses = COURSES.slice(0, 3);
  // Take first 3 instructors
  const featuredInstructors = INSTRUCTORS.slice(0, 3);
  // Take first 3 gallery items
  const galleryPreview = GALLERY_ITEMS.slice(0, 3);

  return (
    <>
      {/* SEO Title */}
      <Helmet>
        <title>  Academy | Premium Fine Art & Digital Art School</title>
        <meta
          name="description"
          content="Discover   Academy, the leading fine art and digital illustration institute. Learn oil painting, digital art, sculpting, and concept art under master guidance."
        />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* Featured Courses */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionTitle
              badge="Our Classes"
              title="Featured Masterclasses"
              subtitle="Immerse yourself in high-end courses designed to elevate your craft from foundational to professional standard."
              align="left"
              className="mb-0 mx-0"
            />
            <Link to={ROUTES.COURSES}>
              <Button variant="outline" icon={<ArrowRightIcon />} iconPosition="right">
                View All Courses
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Achievements (handled by Features section) */}
      <Features />

      {/* Statistics Counter */}
      <Statistics />

      {/* Gallery Preview */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionTitle
              badge="Exhibition Hall"
              title="Student Masterpieces"
              subtitle="Browse through the stunning paintings, sculptures, and digital works created in our studios."
              align="left"
              className="mb-0 mx-0"
            />
            <Link to={ROUTES.GALLERY}>
              <Button variant="outline" icon={<ArrowRightIcon />} iconPosition="right">
                Open Gallery
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryPreview.map((item) => (
              <GalleryCard key={item.id} item={item} onOpenLightbox={() => { }} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-bg-base relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            badge="Success Stories"
            title="Alumni Testimonials"
            subtitle="Hear from our former students who transitioned from hobbyists to professional artists and industry leaders."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            badge="Events & Seminars"
            title="Upcoming Workshops"
            subtitle="Join our live events, webinars, and masterclass critique sessions hosted by leading art directors."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {WORKSHOPS.map((ws) => (
              <div
                key={ws.id}
                className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-border-color/60 text-left flex flex-col gap-4 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300 relative group"
              >
                <div className="flex justify-between items-start">
                  <span className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                    {ws.tag}
                  </span>
                  <span className="text-sm font-bold text-secondary">{ws.price}</span>
                </div>
                <h3 className="font-heading font-bold text-lg md:text-xl text-secondary group-hover:text-primary transition-colors">
                  {ws.title}
                </h3>
                <div className="flex flex-col gap-1.5 text-xs text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {ws.date} ({ws.time})
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={14} />
                    Host: {ws.instructor}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border-color pt-4">
                  <Link to={ROUTES.REGISTRATION} className="text-xs font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
                    Register Seat <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Instructors */}
      <section className="py-20 md:py-28 bg-bg-base relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <SectionTitle
            badge="Studio Masters"
            title="Our Instructors"
            subtitle="Learn directly from professional artists, sculptors, and entertainment concept directors active in the industry."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredInstructors.map((inst) => (
              <InstructorCard key={inst.id} instructor={inst} />
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CTA />

      {/* Newsletter */}
      <Newsletter />
    </>
  );
};

// Simple Arrow icon helper to replace imported ArrowRight
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

export default HomeScreen;
