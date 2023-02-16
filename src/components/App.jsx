import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layuot';
import { HomePage } from 'pages/HomePage';
import { Movies } from 'pages/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />}></Route>
      </Route>
    </Routes>
  );
};
