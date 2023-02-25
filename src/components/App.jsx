import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layuot';
// import { lazy } from 'react';
import { HomePage } from 'pages/HomePage';
import { Movies } from 'pages/Movies';
import { HomeSubPage } from 'pages/HomeSubPage';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { NotFound } from 'pages/NotFound';

// const HomePage = lazy(() => import('pages/HomePage')).then(modyle => {
//   return {
//     ...module,
//     default: module.HomePage,
//   };
// });
// const Movies = lazy(() => import('pages/Movies')).then(modyle => {
//   return {
//     ...module,
//     default: module.Movies,
//   };
// });
// const HomeSubPage = lazy(() => import('pages/HomeSubPage')).then(modyle => {
//   return {
//     ...module,
//     default: module.HomeSubPage,
//   };
// });
// const Cast = lazy(() => import('pages/Cast')).then(modyle => {
//   return {
//     ...module,
//     default: module.Cast,
//   };
// });
// const Reviews = lazy(() => import('pages/Reviews')).then(modyle => {
//   return {
//     ...module,
//     default: module.Reviews,
//   };
// });
// const NotFound = lazy(() => import('pages/NotFound')).then(modyle => {
//   return {
//     ...module,
//     default: module.NotFound,
//   };
// });

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path=":id" element={<HomeSubPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
