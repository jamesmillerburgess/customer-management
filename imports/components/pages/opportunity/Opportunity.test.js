import React from 'react';
import { shallow } from 'enzyme';

import Opportunity, { properties } from './Opportunity';
import FieldLists from '../../../api/fieldList/fieldListCollection';

describe('Opportunity Component', () => {
  let wrapper;
  const props = { fields: [] };
  const options = {
    context: { store: { getState: () => ({ objectEditor: {} }) } },
  };
  beforeEach(() => {
    wrapper = shallow(<Opportunity {...props} />, options);
  });
  it('renders without error', () => {});
});
