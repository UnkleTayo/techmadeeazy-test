import React from 'react';
import Cards from '../../components/Cards';

import './style.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home-title">
        <h1>Hire Top Developers</h1>

        <div className="home-cards">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
