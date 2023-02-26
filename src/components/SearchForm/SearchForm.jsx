import React from 'react';
// import { useNavigate } from 'react-router-dom';

function SearchForm({ setSearchParams }) {
  // const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    // const value = form.elements.search.value.trim().toLowerCase();
    // if (value === '') return;
    // if (setSearchParams.success) {
    //   navigate('/:id', { replace: true });
    // }
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
}
export default SearchForm;
