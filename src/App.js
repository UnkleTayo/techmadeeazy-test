import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Index';
import Favorites from './routes/Favourites';
import Home from './routes/Home';

import './styles/App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
