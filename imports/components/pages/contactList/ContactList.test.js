import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Meteor } from 'meteor/meteor';

Enzyme.configure({ adapter: new Adapter() });

import ContactList, { contactListProps } from './ContactList';

describe('ContactList Component', () => {
  it('connects CompaniesContainer', () => {
    expect(ContactList).toBeInstanceOf(Function);
  });
  it('does not throw', () => {
    expect(ContactList).not.toThrow();
  });
});
describe('gridPageProps Function', () => {
  it('renders a link in the name cells', () => {
    const Cell = contactListProps.gridPageProps({ data: [{ _id: 'a' }] })
      .columns[1].Cell;
    const wrapper = shallow(<Cell index={0} original={{ avatarURL: 'a' }} />);
    expect(wrapper.find('Link').props().to).toBe('/contacts/a');
  });
});
