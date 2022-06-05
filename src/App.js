import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Index';
import { useGetCurrency, useGetDevData } from './queries';
import Favorites from './routes/Favourites';
import Home from './routes/Home';
import 'react-loading-skeleton/dist/skeleton.css';

import './styles/App.scss';
import Skeleton from 'react-loading-skeleton';

function App() {
  const { isLoading: devLoading, data } = useGetDevData();
  const { isLoading: currencyLoading } = useGetCurrency();

  if (devLoading || currencyLoading) {
    return <Skeleton count={5} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <>
          <Route index path="/" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </>
      </Route>
    </Routes>
  );
}

export default App;
