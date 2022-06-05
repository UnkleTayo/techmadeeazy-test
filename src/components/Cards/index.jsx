import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import DevCard from '../DevCard';
import { selectDevList } from '../../features/devs/devSlice';

const Cards = () => {
  const devList = useSelector(selectDevList);
  return (
    <div className="cards">
      {devList?.developer?.developerList?.map((dev) => (
        <DevCard devDetails={dev} const key={dev._id} />
      ))}
    </div>
  );
};

export default Cards;
