import React from 'react';
import { shallow } from 'enzyme';

import Company, { companyProps } from './Company';
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
describe('companyProps Function', () => {
  it('uses the fieldList document if it finds one', () => {
    const fieldList = { fields: { a: 'a' } };
    FieldLists.docs = [fieldList];
    expect(companyProps().properties).toEqual(fieldList.fields);
  });
});
