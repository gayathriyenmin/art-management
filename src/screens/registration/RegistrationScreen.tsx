import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ClipboardCopy, Send } from 'lucide-react';
import { Header } from '../../components/layout/Header';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { registrationSchema } from '../../helpers/validation.helper';
import { COURSES, ROUTES } from '../../constants';

export const RegistrationScreen: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enrolledCourse, setEnrolledCourse] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      course: '',
      experience: 'Beginner' as any,
      message: '',
      agreeToTerms: false,
    }
  });

  // Pre-fill course if present in query param
  useEffect(() => {
    const courseSlug = searchParams.get('course');
    if (courseSlug) {
      const selectedCourse = COURSES.find((c) => c.slug === courseSlug);
      if (selectedCourse) {
        setValue('course', selectedCourse.id);
        setEnrolledCourse(selectedCourse.title);
      }
    }
  }, [searchParams, setValue]);

  const onSubmit = (data: any) => {
    setLoading(true);
    // Find course title
    const selectedCourse = COURSES.find((c) => c.id === data.course);
    if (selectedCourse) {
      setEnrolledCourse(selectedCourse.title);
    }
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      reset();
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Student Enrollment Form |   Academy</title>
        <meta name="description" content="Enroll in classical oil painting, digital art, or ceramic sculpting classes online at   Academy." />
      </Helmet>

      {/* Header Banner */}
      <Header
        title="Student Registration"
        subtitle="Begin your creative journey today. Complete the registration form below to secure your seat in our studios."
      />

      <section className="py-20 md:py-28 bg-white relative text-left">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="bg-slate-50 border border-border-color p-8 md:p-14 rounded-3xl relative">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCopy size={24} className="text-primary" />
              <h3 className="font-heading font-bold text-xl text-secondary">Enrollment Dossier</h3>
            </div>

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="reg-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Full Name" placeholder="Jane Doe" {...register('name')} error={errors.name?.message as string} />
                    <Input label="Email Address" type="email" placeholder="jane@example.com" {...register('email')} error={errors.email?.message as string} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Phone Number" placeholder="+1 (555) 0199" {...register('phone')} error={errors.phone?.message as string} />
                    <Input label="Residential Address" placeholder="123 Art Lane, SF" {...register('address')} error={errors.address?.message as string} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Course Selection */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">Select Course</label>
                      <select
                        {...register('course')}
                        className={`w-full bg-white text-secondary text-sm rounded-xl border ${errors.course ? 'border-error focus:ring-error/20' : 'border-border-color focus:ring-primary/20'
                          } px-4 py-3 transition-all focus:outline-none focus:ring-4 focus:border-primary`}
                      >
                        <option value="">-- Choose a Class --</option>
                        {COURSES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                      {errors.course && (
                        <span className="text-xs text-error font-medium">{errors.course.message as string}</span>
                      )}
                    </div>

                    {/* Experience level Selection */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">Experience Level</label>
                      <select
                        {...register('experience')}
                        className={`w-full bg-white text-secondary text-sm rounded-xl border ${errors.experience ? 'border-error focus:ring-error/20' : 'border-border-color focus:ring-primary/20'
                          } px-4 py-3 transition-all focus:outline-none focus:ring-4 focus:border-primary`}
                      >
                        <option value="Beginner">Beginner (No prior study)</option>
                        <option value="Intermediate">Intermediate (Basic foundations)</option>
                        <option value="Advanced">Advanced (Exhibiting/Working artist)</option>
                      </select>
                      {errors.experience && (
                        <span className="text-xs text-error font-medium">{errors.experience.message as string}</span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">Special Requests / Goals (Optional)</label>
                    <textarea
                      placeholder="Share your goals or ask about studio hours..."
                      rows={4}
                      {...register('message')}
                      className="w-full bg-white text-secondary placeholder-text-muted text-sm rounded-xl border border-border-color px-4 py-3 transition-all focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  {/* Agree to terms */}
                  <div className="flex flex-col gap-1">
                    <label className="flex items-start gap-3 cursor-pointer text-sm text-text-muted select-none">
                      <input
                        type="checkbox"
                        {...register('agreeToTerms')}
                        className="mt-1 accent-primary rounded border-border-color focus:ring-primary"
                      />
                      <span>
                        I agree to   Academy's terms of service and consent to studio safety policies.
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <span className="text-xs text-error font-medium pl-8">{errors.agreeToTerms.message as string}</span>
                    )}
                  </div>

                  <Button type="submit" loading={loading} fullWidth size="lg" icon={<Send size={16} />} iconPosition="right">
                    Submit Enrollment
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-enroll"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center p-8 text-center gap-4 text-success"
                >
                  <CheckCircle2 size={56} className="text-success animate-pulse" />
                  <h4 className="font-heading font-bold text-lg text-secondary">Enrollment Dossier Received</h4>
                  <p className="text-xs text-text-muted max-w-sm leading-relaxed">
                    Congratulations! You have successfully requested enrollment for <span className="text-primary font-bold">{enrolledCourse}</span>.
                    Our administrative team will review your application and send you a link to complete tuition payment and schedule your studio tour.
                  </p>
                  <Link to={ROUTES.HOME}>
                    <Button variant="outline" size="sm">
                      Return Home
                    </Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegistrationScreen;
