import React from 'react';
import AnimatedPage from '../../components/AnimatePages';
import Cards from '../../components/Cards';

import './style.scss';

const Home = () => {
  return (
    <AnimatedPage>
      <div className="home">
        <div className="home-title">
          <h1>Hire Top Developers</h1>
        </div>
        <div className="home-cards">
          <Cards list={'home'} />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
