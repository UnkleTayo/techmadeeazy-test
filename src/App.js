import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Index';
import { useGetCurrency, useGetDevData } from './queries';
import Favorites from './routes/Favourites';
import Home from './routes/Home';
import 'react-loading-skeleton/dist/skeleton.css';

import './styles/App.scss';
import Skeleton from 'react-loading-skeleton';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { isLoading: devLoading } = useGetDevData();
  const { isLoading: currencyLoading } = useGetCurrency();

  const location = useLocation();

  if (devLoading || currencyLoading) {
    return <Skeleton count={5} />;
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <>
            <Route index path="/" element={<Home />} />
            <Route path="favorites" element={<Favorites />} />
          </>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
