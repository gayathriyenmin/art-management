import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { ROUTES } from '../constants';
import {
  HomeScreen,
  AboutScreen,
  CourseListScreen,
  CourseDetailsScreen,
  GalleryScreen,
  TestimonialScreen,
  FAQScreen,
  ContactScreen,
  RegistrationScreen
} from '../screens';

export const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomeScreen />} />
        <Route path={ROUTES.ABOUT} element={<AboutScreen />} />
        <Route path={ROUTES.COURSES} element={<CourseListScreen />} />
        <Route path={ROUTES.COURSE_DETAILS} element={<CourseDetailsScreen />} />
        <Route path={ROUTES.GALLERY} element={<GalleryScreen />} />
        <Route path={ROUTES.TESTIMONIALS} element={<TestimonialScreen />} />
        <Route path={ROUTES.FAQ} element={<FAQScreen />} />
        <Route path={ROUTES.CONTACT} element={<ContactScreen />} />
        <Route path={ROUTES.REGISTRATION} element={<RegistrationScreen />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
