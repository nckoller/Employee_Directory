import React from 'react';

export function SortMenu({ handleSortSelection }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenu2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sort Alphabetically By
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button className="dropdown-item" type="button">
          First Name
        </button>
        <button className="dropdown-item" type="button">
          Last Name
        </button>
        <button className="dropdown-item" type="button">
          Username
        </button>
      </div>
    </div>
  );
}

