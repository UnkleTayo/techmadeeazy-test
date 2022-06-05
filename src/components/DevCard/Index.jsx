import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fav from '../../assets/fav.svg';
import UnFav from '../../assets/unfav.svg';
import {
  handleLike,
  handleUnlike,
  selectDevList,
} from '../../features/devs/devSlice';

import './style.scss';

const formatter = (amt = '33000', denomination = 'NGN') => {
  return new Intl.NumberFormat(`en-${denomination?.substring(0, 2)}`, {
    style: 'currency',
    currency: denomination?.toUpperCase(),
  }).format(amt);
};

const DevCard = ({ devDetails }) => {
  const [fav, setFav] = useState(false);
  let { developer } = useSelector(selectDevList);

  developer = useMemo(() => {
    return developer;
  }, [developer]);

  const coin = useMemo(() => {
    return developer.selectedCurrency;
  }, [developer.selectedCurrency]);

  const cardInfo = useMemo(() => {
    return devDetails;
  }, [devDetails]);

  const dispatch = useDispatch();

  const handleFav = (cardInfo) => {
    if (!cardInfo.isFavorite) {
      dispatch(handleLike(cardInfo._id));
    } else {
      dispatch(handleUnlike(cardInfo._id));
    }
  };

  if (!developer.selectedCurrency) {
    <h1>ladjgg</h1>;
    return;
  }

  return (
    <div className="DevCard">
      <div
        onClick={() => {
          cardInfo.isFavorite
            ? dispatch(handleUnlike(cardInfo._id))
            : dispatch(handleLike(cardInfo._id));
        }}
        className={`reaction ${cardInfo.isFavorite ? 'like' : 'unlike'}`}
      >
        <img src={cardInfo.isFavorite ? Fav : UnFav} alt="reaction-icon" />
      </div>
      <div className="DevCard-banner">
        <img src={cardInfo._source.service_photo} alt="banner" />
        <div className="DevCard-dp">
          <img src={cardInfo._source.avatar} alt="avatar" />
        </div>
      </div>

      <div className="DevCard-info">
        <div className="DevCard-details">
          <div>
            <p className="DevCard-details-name">
              {cardInfo._source.display_name}
            </p>
            <p className="DevCard-details-charge">
              {formatter(
                cardInfo._source.starting_from / (coin?.divider || 1),
                coin?.short
              )}
            </p>
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
