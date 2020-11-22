import React from 'react';
import '../App.css';

export function SearchBox({ handleSearchChange }) {
  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by name"
          onChange={(e) => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}

