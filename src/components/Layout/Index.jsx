import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';

import './style.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
