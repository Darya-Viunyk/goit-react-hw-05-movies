import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layuot';
// import { lazy } from 'react';
import { HomePage } from 'pages/HomePage';
import { Movies } from 'pages/Movies';
import { HomeSubPage } from 'pages/HomeSubPage';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { NotFound } from 'pages/NotFound';
// const Layout = lazy(() => import('./Layout/Layuot'));
// const HomePage = lazy(() => import('pages/HomePage'));
// const Movies = lazy(() => import('pages/Movies'));
// const HomeSubPage = lazy(() => import('pages/HomeSubPage'));
// const Cast = lazy(() => import('pages/Cast'));
// const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path=":id" element={<HomeSubPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />}>
          <Route path=":id" element={<HomeSubPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
