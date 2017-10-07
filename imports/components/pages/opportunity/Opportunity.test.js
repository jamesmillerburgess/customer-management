import React from 'react';
import { shallow } from 'enzyme';

import Opportunity, { opportunityProps } from './Opportunity';
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
describe('opportunityProps Function', () => {
  it('uses the fieldList document if it finds one', () => {
    const fieldList = { fields: { a: 'a' } };
    FieldLists.docs = [fieldList];
    expect(opportunityProps().properties).toEqual(fieldList.fields);
  });
});
