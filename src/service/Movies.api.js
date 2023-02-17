import axios from 'axios';
import { useState, useEffect } from 'react';

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
