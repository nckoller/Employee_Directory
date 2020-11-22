import React from 'react';
import '../App.css';
import { SearchBox } from './SearchBox';
import { SortMenu } from './SortMenu';

export function Header({ handleSearchChange, handleSortSelection }) {
  return (
    <header className="jumbotron header-text">
      <h1>Staff Directory</h1>
      <SearchBox handleSearchChange={handleSearchChange} />
      <SortMenu handleSortSelection={handleSortSelection} />
    </header>
  );
}
