import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import ContactsContainer, { sortContacts } from './ContactsContainer';

describe('ContactsContainer Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<ContactsContainer />)));
  afterEach(() => wrapper.unmount());
  it('wraps the ContactsDisplay component', () => {
    expect(wrapper.name()).toBe('ContactsDisplay');
  });
  it('is loading if subscription is not ready', () => {
    Meteor._userId = 'a';
    Meteor.ready = false;
    wrapper.setProps({ a: 'a' });
    expect(wrapper.props().loading).toBe(true);
  });
  it('is not loading if subscription is ready', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    wrapper.setProps({ a: 'a' });
    expect(wrapper.props().loading).toBe(false);
  });
});
describe('sortContacts Function', () => {
  it('sorts by createdDate', () => {
    const a = { createDate: new Date('January 1, 2017') };
    const b = { createDate: new Date('January 2, 2017') };
    expect(sortContacts(a, b) > 0).toEqual(true);
    expect(sortContacts(b, a) < 0).toEqual(true);
    expect(sortContacts(a, a) === 0).toEqual(true);
  });
});
