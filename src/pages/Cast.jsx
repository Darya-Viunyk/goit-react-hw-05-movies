import { useGetMovieCast } from 'service/Movies.api';
import React from 'react';
import { useParams } from 'react-router-dom';
import defaultImg from 'img/images.png';
import { List, HeaderName, AboutName, Cart } from './cast.styled';

function Cast() {
  const { id } = useParams();
  const { loading, cast, done } = useGetMovieCast(id);

  if (!loading && !done) return null;
  if (loading) return <h3>Loading...</h3>;
  return (
    <>
      <List>
        {cast.map(it => {
          const imgUrl = it.profile_path
            ? `${'https://image.tmdb.org/t/p/w500'}${it.profile_path}`
            : defaultImg;

          return (
            <Cart key={it.id}>
              <HeaderName>Character:{it.character}</HeaderName>
              <AboutName>Name:{it.name}</AboutName>
              <img src={imgUrl} alt="" width={150} />
            </Cart>
          );
        })}
      </List>
    </>
  );
}
export default Cast;
