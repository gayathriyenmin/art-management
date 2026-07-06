import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Star } from 'lucide-react';
import type { Course } from '../../../interfaces';
import { formatCurrency } from '../../../helpers/format.helper';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      onClick={() => navigate(`/courses/${course.slug}`)}
      className="relative flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg border border-border-color/60 hover:shadow-xl transition-all duration-300 group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        {/* Category Tag */}
        <span className="absolute top-4 left-4 z-10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-secondary/80 backdrop-blur-md rounded-full">
          {course.category}
        </span>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
      </div>

      {/* Info Content */}
      <div className="p-6 flex flex-col flex-grow text-left">
        {/* Level and Rating */}
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="font-semibold text-primary uppercase tracking-wide">
            {course.level}
          </span>
          <div className="flex items-center gap-1 font-bold text-secondary">
            <Star size={14} className="text-accent fill-accent" />
            <span>{course.rating}</span>
            <span className="text-text-muted font-normal">({course.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-lg md:text-xl text-secondary leading-snug mb-3 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-muted line-clamp-2 mb-6">
          {course.description}
        </p>

        {/* Meta Stats */}
        <div className="flex items-center gap-4 text-xs text-text-muted mb-6 mt-auto">
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} />
            <span>{course.lessonsCount} Lessons</span>
          </div>
        </div>

        {/* Footer: Instructor & Price */}
        <div className="pt-4 border-t border-border-color flex items-center justify-between mt-auto">
          {/* Instructor info */}
          <div className="flex items-center gap-2.5">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-8 h-8 rounded-full object-cover border border-primary/20"
            />
            <span className="text-xs font-semibold text-secondary truncate max-w-[120px]">
              {course.instructor.name}
            </span>
          </div>
          {/* Price */}
          <div className="text-right">
            <span className="text-lg font-black text-secondary">
              {formatCurrency(course.price)}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Card Glow Overlay */}
      <div className="absolute inset-0 border border-primary/0 rounded-3xl transition-all duration-300 group-hover:border-primary/20 pointer-events-none" />
    </motion.div>
  );
};

export default CourseCard;
