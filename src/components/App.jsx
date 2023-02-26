import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layuot';
import { lazy, Suspense } from 'react';
// import { HomePage } from 'pages/HomePage';
// import { Movies } from 'pages/Movies';
// import { HomeSubPage } from 'pages/HomeSubPage';
// import { Cast } from 'pages/Cast';
// import { Reviews } from 'pages/Reviews';
// import { NotFound } from 'pages/NotFound';
const HomePage = lazy(() => import('pages/HomePage'));
// const Movies = lazy(() => import('pages/Movies')).then(modyle => {
//   return {
//     ...module,
//     default: module.Movies,
//   };
// });
const Movies = lazy(() => import('pages/Movies'));
const HomeSubPage = lazy(() => import('pages/HomeSubPage'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<HomeSubPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
