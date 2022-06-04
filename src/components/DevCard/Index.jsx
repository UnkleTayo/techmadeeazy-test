import React from 'react';
import Img from '../../assets/card.svg';

import './style.scss';
const DevCard = () => {
  return (
    <div className="DevCard">
      <div className="DevCard-banner">
        <img src={Img} alt="banner" />
        <div className="DevCard-dp">
          <img src={Img} alt="banner" />
        </div>
      </div>

      <div className="DevCard-info">
        <div className="DevCard-details">
          <div>
            <p>Domines</p>
            <p>₦30,000</p>
          </div>
          <div>
            <span>Hire</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
