import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Index';
import Favourites from './routes/Favourites';
import Home from './routes/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="favourites" element={<Favourites />} />
      </Route>
    </Routes>
  );
}

export default App;
