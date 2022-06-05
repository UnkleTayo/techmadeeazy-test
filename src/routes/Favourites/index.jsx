import React from 'react';
import { useSelector } from 'react-redux';
import { selectDevList } from '../../features/devs/devSlice';

const Favorites = () => {
  const devList = useSelector(selectDevList);

  return <div>Favourites</div>;
};

export default Favorites;
