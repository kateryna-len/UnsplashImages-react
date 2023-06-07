import React, { useState } from 'react';
import { useGlobalContext } from '../context';

function SearchForm() {
  const { setSearch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = e.target.elements.search.value;
    console.log(456, result);
    if (!result) return;
    setSearch(result);
  };
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
