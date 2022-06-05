import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import DevCard from '../DevCard';
import { selectDevList } from '../../features/devs/devSlice';

const Cards = ({ list }) => {
  const devList = useSelector(selectDevList);
  return (
    <div className="cards">
      {list === 'home' &&
        devList?.developer?.developerList?.map((dev) => (
          <DevCard devDetails={dev} const key={dev._id} />
        ))}
      {list === 'favorite' && (
        <>
          {devList?.developer?.favoriteList.length < 1 ? (
            <h1>No Favorites</h1>
          ) : (
            devList?.developer?.favoriteList?.map((dev) => (
              <DevCard devDetails={dev} const key={dev._id} />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default Cards;
