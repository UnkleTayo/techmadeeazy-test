import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
