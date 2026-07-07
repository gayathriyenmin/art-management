import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import { CourseCard } from '../../cards/CourseCard';
import { EmptyState } from '../../common/EmptyState';
import { Input } from '../../common/Input';
import { useDebounce } from '../../../hooks';
import { SectionTitle } from '../../common/SectionTitle';

const CATEGORIES = ['All', 'Fine Arts', 'Digital Art', 'Sculpture'];
const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export const Courses: React.FC = () => {
  const courses = useSelector((state: RootState) => state.courses.items);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === 'All' || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [courses, debouncedSearchQuery, selectedCategory, selectedLevel]);

  return (
    <section id="courses" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          badge="Our Classes"
          title="Explore Curriculum"
          subtitle="Hone your craft under the mentorship of industry veterans. Select your preferred class focus and expertise tier."
        />

        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch lg:items-center justify-between mb-12 border-b border-border-color pb-8 text-left mt-8">
          {/* Search Input */}
          <div className="w-full lg:max-w-md">
            <Input
              placeholder="Search courses, mentors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search size={18} />}
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${selectedCategory === cat
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/10'
                    : 'bg-white border-border-color text-text-muted hover:border-slate-300'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Level Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {LEVELS.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${selectedLevel === lvl
                    ? 'bg-secondary border-secondary text-white shadow-md'
                    : 'bg-white border-border-color text-text-muted hover:border-slate-300'
                  }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Courses List */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
};

export default Courses;
