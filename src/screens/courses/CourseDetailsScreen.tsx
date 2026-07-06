import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, BookOpen, Layers, Star, CheckCircle } from 'lucide-react';
import type { RootState } from '../../store';
import { setSelectedCourseBySlug } from '../../store';
import { Button } from '../../components/common/Button';
import { formatCurrency } from '../../helpers/format.helper';
import { ROUTES } from '../../constants';

export const CourseDetailsScreen: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch();
  const course = useSelector((state: RootState) => state.courses.selectedCourse);

  useEffect(() => {
    if (slug) {
      dispatch(setSelectedCourseBySlug(slug));
    }
  }, [slug, dispatch]);

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold text-secondary mb-4">Course Not Found</h2>
        <Link to={ROUTES.COURSES}>
          <Button variant="primary">Back to Courses</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{course.title} |   Academy</title>
        <meta name="description" content={course.description} />
      </Helmet>

      <section className="pt-32 pb-20 bg-bg-base relative text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Back button */}
          <Link to={ROUTES.COURSES} className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-all mb-8 font-semibold text-sm">
            <ArrowLeft size={16} /> Back to Courses
          </Link>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Content (2 Columns) */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Main Course Info */}
              <div>
                <span className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                  {course.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-secondary tracking-tight mt-4 mb-6 leading-tight">
                  {course.title}
                </h1>
                <p className="text-base md:text-lg text-text-muted leading-relaxed font-light">
                  {course.longDescription || course.description}
                </p>
              </div>

              {/* Course Highlights */}
              <div className="bg-white p-8 rounded-3xl border border-border-color shadow-sm">
                <h3 className="font-heading font-bold text-lg md:text-xl text-secondary mb-6">
                  What You Will Learn
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-secondary font-medium leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus Outline */}
              {course.syllabus && course.syllabus.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-secondary mb-6">
                    Syllabus Outline
                  </h3>
                  <div className="flex flex-col gap-4">
                    {course.syllabus.map((week) => (
                      <div key={week.week} className="bg-white rounded-2xl p-6 border border-border-color shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-2.5 py-0.5 text-[10px] font-bold text-highlight bg-highlight/10 rounded-full">
                            Week {week.week}
                          </span>
                          <h4 className="font-heading font-bold text-base text-secondary">{week.title}</h4>
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed pl-[60px]">{week.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar (1 Column) */}
            <div className="lg:sticky lg:top-28 flex flex-col gap-8">
              {/* Media Card */}
              <div className="bg-white rounded-3xl border border-border-color overflow-hidden shadow-lg flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-6 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted font-medium">Course Tuition</span>
                    <span className="text-3xl font-black text-secondary">{formatCurrency(course.price)}</span>
                  </div>

                  {/* Quick details */}
                  <div className="flex flex-col gap-4 text-sm text-secondary border-t border-b border-border-color py-6">
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted flex items-center gap-2"><Clock size={16} /> Duration</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted flex items-center gap-2"><BookOpen size={16} /> Lessons</span>
                      <span className="font-semibold">{course.lessonsCount} Sessions</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted flex items-center gap-2"><Layers size={16} /> Skill Level</span>
                      <span className="font-semibold">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted flex items-center gap-2"><Star size={16} className="text-accent fill-accent" /> Rating</span>
                      <span className="font-bold flex items-center gap-1">{course.rating} <span className="text-xs text-text-muted font-normal">({course.reviewsCount} reviews)</span></span>
                    </div>
                  </div>

                  {/* Register CTA */}
                  <Link to={`${ROUTES.REGISTRATION}?course=${course.slug}`}>
                    <Button fullWidth size="lg">Enroll in This Class</Button>
                  </Link>
                </div>
              </div>

              {/* Instructor Card */}
              <div className="bg-slate-50 border border-border-color rounded-3xl p-6 text-left flex items-start gap-4">
                <img src={course.instructor.avatar} alt={course.instructor.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Your Mentor</span>
                  <h4 className="font-heading font-bold text-base text-secondary">{course.instructor.name}</h4>
                  <p className="text-xs text-text-muted leading-relaxed line-clamp-3">{course.instructor.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetailsScreen;
