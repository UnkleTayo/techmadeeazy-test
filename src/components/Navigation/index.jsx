import React from 'react';
import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

import { Heart, Search } from '../Icons';

import './style.scss';
const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              to="/"
            >
              <span className="span-icon">
                <Search />
              </span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              to="/favorites"
            >
              <span className="span-icon">
                <Heart />
              </span>
              <span>Favorites</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
