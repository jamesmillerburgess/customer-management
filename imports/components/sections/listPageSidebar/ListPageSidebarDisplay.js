import React from 'react';
import OptionField from '../../fields/optionField/OptionField';

const options = [
  { value: 'SELF', label: 'filterOptions.SELF' },
  { value: 'TEAM', label: 'filterOptions.TEAM' },
  { value: 'ANY', label: 'filterOptions.ANY' },
];

const ListPageSidebarDisplay = props => (
  <ul className="filter-list">
    <li className="list-header">Owner</li>
    <li>
      <OptionField
        value={props.ownerFilter}
        options={options}
        onChange={props.setOwnerFilter}
      />
    </li>
  </ul>
);

export default ListPageSidebarDisplay;
