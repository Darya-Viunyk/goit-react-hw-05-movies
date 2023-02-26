import { useGetMovieReviews } from 'service/Movies.api';
import React from 'react';
import { useParams } from 'react-router-dom';
import { List, HeaderName } from './reviews.styled';

function Reviews() {
  const { id } = useParams();
  const { loading, reviews, done } = useGetMovieReviews(id);

  if (!loading && !done) return null;
  if (loading) return <h3>Loading...</h3>;
  if (!loading && done && reviews.length === 0)
    return <h4>We don't have any reviews for this movie</h4>;
  return (
    <>
      <List>
        {reviews.map(it => {
          return (
            <li key={it.id}>
              <HeaderName>Author: {it.author}</HeaderName>
              <p> {it.content}</p>
            </li>
          );
        })}
      </List>
    </>
  );
}
export default Reviews;
