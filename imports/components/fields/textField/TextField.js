import React from 'react';

const TextField = props => (
  <input
    type="text"
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
    placeholder={props.placeholder}
  />
);

export default TextField;
