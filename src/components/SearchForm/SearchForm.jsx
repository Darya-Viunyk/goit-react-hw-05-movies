import React from 'react';

export const SearchForm = ({ setSearchParams }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    // const value = form.elements.search.value.trim().toLowerCase();
    // if (value === '') return;

    setSearchParams({ moviesname: form.elements.moviesname.value });
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="moviesname" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
