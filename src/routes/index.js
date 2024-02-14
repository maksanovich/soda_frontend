import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

const AppRoutes = () => {
  return useRoutes(
    [
      { path: "*", element: <Navigate to="/" /> },
      MainRoutes,
      AuthRoutes,
    ]
  );
};

export default AppRoutes;