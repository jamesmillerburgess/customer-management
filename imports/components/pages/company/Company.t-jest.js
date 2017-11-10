import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Company, { properties } from './Company';
import FieldLists from '../../../api/fieldList/fieldListCollection';

describe('Company Component', () => {
  let wrapper;
  const props = { fields: [] };
  const options = {
    context: { store: { getState: () => ({ objectEditor: {} }) } },
  };
  beforeEach(() => {
    wrapper = shallow(<Company {...props} />, options);
  });
  it('renders without error', () => {});
});
