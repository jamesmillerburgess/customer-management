import React from 'react';
import './SearchInput.scss';

const SearchInput = props => (
  <input className="search" placeholder={props.placeholder} />
);

export default SearchInput;
