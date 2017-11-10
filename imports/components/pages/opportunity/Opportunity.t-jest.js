import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
