import React from 'react';
import { Box } from './serchforma.styled';
import { Form } from './serchforma.styled';
import { Input } from './serchforma.styled';
import { Button } from './serchforma.styled';

function SearchForm({ setSearchParams }) {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    setSearchParams({ moviesname: form.elements.moviesname.value });
    form.reset();
  };
  return (
    <>
      <Box>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="moviesname" />
          <Button type="submit">Search</Button>
        </Form>
      </Box>
    </>
  );
}
export default SearchForm;
