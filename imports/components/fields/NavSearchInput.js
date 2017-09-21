import React from 'react';
import './NavSearchInput.scss';

const SearchInput = props => (
  <input className="nav-search" placeholder={props.placeholder} />
);

export default SearchInput;
