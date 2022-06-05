import { Outlet } from 'react-router-dom';
import CustomSelect from '../CustomSelect';
import Navigation from '../Navigation';

import './style.scss';

const Layout = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
