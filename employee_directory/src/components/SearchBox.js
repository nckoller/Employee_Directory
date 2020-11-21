import React from 'react';
import '../App.css';

function SearchBox({ handleSearchChange }) {
  return (
    <div>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search by name"
          onChange={(e) => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}

export default SearchBox;
