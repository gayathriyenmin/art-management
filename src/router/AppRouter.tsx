import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;
