import React from 'react';

const TextField = props => (
  <input value={props.value} onChange={e => props.onChange(e.target.value)} />
);

export default TextField;
