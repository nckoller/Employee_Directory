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
        <button className="dropdown-item" type="button" value="firstName" onClick={(e) => handleSortSelection(e)}>
          First Name
        </button>
        <button className="dropdown-item" type="button" value="lastName" onClick={(e) => handleSortSelection(e)}>
          Last Name
        </button>
        <button className="dropdown-item" type="button" value="username" onClick={(e) => handleSortSelection(e)}>
          Username
        </button>
      </div>
    </div>
  );
}

