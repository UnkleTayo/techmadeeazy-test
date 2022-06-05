import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import SingleCard from '../SingleCard';
import { selectDevList } from '../../features/devs/devSlice';

const Cards = ({ list }) => {
  const devList = useSelector(selectDevList);
  return (
    <div className="cards-container">
      <div className="cards">
        {list === 'home' &&
          devList?.developer?.developerList
            ?.slice(0, 12)
            .map((dev) => <SingleCard devDetails={dev} const key={dev._id} />)}
        {list === 'favorite' && (
          <>
            {devList?.developer?.favoriteList.length < 1 ? (
              <h1>No favorite developer yet</h1>
            ) : (
              devList?.developer?.favoriteList?.map((dev) => (
                <SingleCard devDetails={dev} const key={dev._id} />
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cards;
