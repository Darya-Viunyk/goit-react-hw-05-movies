import { useSubPages } from 'service/Movies.api';
import React, { useState } from 'react';
import { Button } from './homesubpage.styled';
import { Box } from './homesubpage.styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Page, PageBox, Header, BoxButton } from './homesubpage.styled';

export const HomeSubPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [fromLocation] = useState(() => location?.state?.from);
  const { loading, movie, done } = useSubPages(id);

  const { title, release_date, overview, genres, poster_path, vote_average } =
    movie;

  if (!loading && !done) return null;
  if (loading) return <h3>Loading...</h3>;
  if (!loading && done) {
    const imgUrl = `${'https://image.tmdb.org/t/p/w500'}${poster_path}`;
    const year = release_date.slice(0, 4);
    const headTitle = `${title} (${year})`;
    const genresString = genres
      .map(x => {
        return x.name;
      })
      .join(', ');

    return (
      <Box>
        <Button to={fromLocation || '/'} state={'HomeSubPage'}>
          Back
        </Button>
        <PageBox>
          <div>
            <img src={imgUrl} alt="" width={400} />
          </div>
          <Page>
            <Header>{headTitle}</Header>

            <p>{overview}</p>
            <p>{genresString}</p>
            <p>{vote_average}</p>
          </Page>
        </PageBox>
        <BoxButton>
          <Button to={'cast'}>Cast</Button>
          <Button to={'reviews'}>Reviews</Button>
        </BoxButton>

        <Outlet />
      </Box>
    );
  }
};
