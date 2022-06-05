import React from 'react';
import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

import Search1 from '../../assets/search.svg';
import Search2 from '../../assets/search2.svg';
import Heart from '../../assets/heart.svg';
import Heart2 from '../../assets/heart2.svg';

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
              <span className="icon"></span>

              <span className="span-icon">
                <span className="span-icon-active">
                  <img src={Search1} alt="..." />
                  {/* <Search /> */}
                </span>
                <span className="span-icon-inactive">
                  <img src={Search2} alt="..." />
                </span>
              </span>
              <span className="link-text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              to="/favorites"
            >
              <span className="icon"></span>

              <span className="span-icon">
                <span className="span-icon-active">
                  <img src={Heart2} alt="..." />
                  {/* <Search /> */}
                </span>
                <span className="span-icon-inactive">
                  <img src={Heart} alt="..." />
                </span>
              </span>
              <span className="link-text">Favorites</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
