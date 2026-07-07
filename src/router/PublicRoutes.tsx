import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { ROUTES } from '../constants';
import { HomeScreen } from '../screens';

export const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomeScreen />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
