import React, { useState } from 'react';
import Fav from '../../assets/fav.svg';
import UnFav from '../../assets/unfav.svg';

import './style.scss';
const DevCard = () => {
  const [fav, setFav] = useState(false);
  return (
    <div className="DevCard">
      <div
        onClick={() => setFav((prev) => !prev)}
        className={`reaction ${fav ? 'like' : 'unlike'}`}
      >
        <img src={fav ? Fav : UnFav} alt="reaction-icon" />
      </div>
      <div className="DevCard-banner">
        <img
          src={`https://dl6lnggp44pnu.cloudfront.net/service-multimedia/330006379-photo-6814-mini`}
          alt="banner"
        />
        <div className="DevCard-dp">
          <img
            src={`https://d17meyd56oy0jr.cloudfront.net/seller-logo/330000932`}
            alt="banner"
          />
        </div>
      </div>

      <div className="DevCard-info">
        <div className="DevCard-details">
          <div>
            <p className="DevCard-details-name">Domines</p>
            <p className="DevCard-details-charge">₦30,000</p>
          </div>
          <div>
            <span className="DevCard-details-hire">
              <a href="/">Hire</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
