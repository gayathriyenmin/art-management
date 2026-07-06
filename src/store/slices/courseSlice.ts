import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Course } from '../../interfaces';
import { COURSES } from '../../constants';

interface CourseState {
  items: Course[];
  selectedCourse: Course | null;
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  items: COURSES,
  selectedCourse: null,
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.items = action.payload;
    },
    setSelectedCourse: (state, action: PayloadAction<Course | null>) => {
      state.selectedCourse = action.payload;
    },
    setSelectedCourseBySlug: (state, action: PayloadAction<string>) => {
      state.selectedCourse = state.items.find((c) => c.slug === action.payload) || null;
    },
  },
});

export const { setCourses, setSelectedCourse, setSelectedCourseBySlug } = courseSlice.actions;
export default courseSlice.reducer;
