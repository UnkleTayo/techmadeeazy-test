import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectDevList } from '../../features/devs/devSlice';
import CustomSelect from '../CustomSelect';
import Navigation from '../Navigation';

import './style.scss';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <div className="layout-content">
        <Outlet />
        <div className="footer">
          <div>
            <span>© 2022 DevHire</span>
          </div>

          <div className="dropdown">
            <CustomSelect />
            {/* <select value={this.state.fruit} onChange={this.handleChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
