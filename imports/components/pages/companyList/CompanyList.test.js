import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import CompanyList, { companyListProps } from './CompanyList';

describe('CompanyList Component', () => {
  it('connects ListPageContainer', () => {
    expect(CompanyList).toBeInstanceOf(Function);
  });
  it('does not throw', () => {
    expect(CompanyList).not.toThrow();
  });
});
describe('gridPageProps Function', () => {
  it('renders a link in the name cells', () => {
    const Cell = companyListProps.gridPageProps({ data: [{ _id: 'a' }] })
      .columns[1].Cell;
    const wrapper = shallow(<Cell index={0} original={{ avatarURL: 'a' }} />);
    expect(wrapper.find('Link').props().to).toBe('/companies/a');
  });
});
