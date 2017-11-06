import React from 'react';
import { Translate } from 'react-redux-i18n';

import OptionField from '../../fields/optionField/OptionField';
import CheckboxField from '../../fields/checkboxField/CheckboxField';

const options = [
  { value: 'SELF', label: 'filterOptions.SELF' },
  { value: 'TEAM', label: 'filterOptions.TEAM' },
  { value: 'ANY', label: 'filterOptions.ANY' },
];

const ListPageSidebarDisplay = props => (
  <ul className="filter-list">
    <li>
      <div className="list-item-wrapper">
        <div className="label">
          <Translate value="listPageSidebar.owner" />
        </div>
        <OptionField
          value={props.ownerFilter}
          options={options}
          onChange={props.setOwnerFilter}
        />
      </div>
    </li>
    <li>
      <CheckboxField
        value={props.showArchived}
        onChange={props.setShowArchived}
      />{' '}
      <Translate value="listPageSidebar.showArchived" />
    </li>
  </ul>
);

export default ListPageSidebarDisplay;
