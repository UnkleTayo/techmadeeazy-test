import React from 'react';
import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/invoices">Home</NavLink>
          </li>
          <li>
            <NavLink to="/invoices">Invoices</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
