import axios from 'axios';
import { useState, useEffect } from 'react';
// import { useMoviesRender } from 'hooks/useMoviesRender';

const KEY = '5c631b44b992ee7cf944461a6248f299';

const response = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY,
    language: 'en-US',
    size: 20,
  },
});

export function useTrendingApi() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    response.get('/trending/movie/day').then(res => {
      setData(res.data.results);
      setLoading(false);
    });
  }, []);

  return [data, loading];
}
// https://api.themoviedb.org/3/movie/550?api_key=5c631b44b992ee7cf944461a6248f299

export function useSubPages(movieId) {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    setLoading(true);
    response.get(`/movie/${movieId}`).then(res => {
      setMovie(res.data);
      setDone(true);
      setLoading(false);
    });
  }, [movieId]);

  return { loading, movie, done };
}
export function useGetMovieCast(movieId) {
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    setLoading(true);
    response.get(`/movie/${movieId}/credits`).then(res => {
      setCast(res.data.cast);
      setDone(true);
      setLoading(false);
    });
  }, [movieId]);

  return { loading, cast, done };
}
export function useGetMovieReviews(movieId) {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState({});

  const [done, setDone] = useState(false);

  useEffect(() => {
    setLoading(true);
    response.get(`/movie/${movieId}/reviews`).then(res => {
      setReviews(res.data.results);
      setDone(true);
      setLoading(false);
    });
  }, [movieId]);

  return { loading, reviews, done };
}
