import React from 'react';
import AnimatedPage from '../../components/AnimatePages';
import Cards from '../../components/Cards';

const Favorites = () => {
  return (
    <AnimatedPage>
      <div className="home">
        <div className="home-title">
          <h1>Favorites</h1>

          <div className="home-cards">
            <Cards list={'favorite'} />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Favorites;
