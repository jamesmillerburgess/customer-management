import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import CompanyContainer from './CompanyContainer';
import Companies from '../../../api/company/companyCollection';

describe('CompanyContainer Component', () => {
  let wrapper;
  const props = {
    match: { params: { companyId: null } },
    loadedValues: {},
    setHasLoaded: jest.fn(),
    setProperty: jest.fn(),
    setLoadedValues: jest.fn(),
    setNote: jest.fn(),
  };
  beforeEach(() => (wrapper = shallow(<CompanyContainer {...props} />)));
  afterEach(() => wrapper.unmount());
  it('wraps the CompanyDisplay component', () => {
    expect(wrapper.name()).toBe('CompanyDisplay');
  });
  it('sets loading to true if there is no userId', () => {
    Meteor._userId = null;
    wrapper.setProps({});
    expect(wrapper.props().loading).toBe(true);
  });
  it('sets loading to true if there is a userid but the subscription is not ready', () => {
    Meteor._userId = 'a';
    Meteor.ready = false;
    wrapper.setProps({});
    expect(wrapper.props().loading).toBe(true);
  });
  it('sets loading to false if there is a userid and the subscription is ready', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    wrapper.setProps({});
    expect(wrapper.props().loading).toBe(false);
  });
  it('passes an empty company if none is found', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    Companies.docs = [];
    wrapper.setProps();
    expect(wrapper.props().company.name).toBe('');
    expect(wrapper.props().company.timeline).toEqual([]);
  });
  it('sets up the data if it finds a company and has not already loaded', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    Companies.docs = [{ _id: 'a' }];
    const fns = {
      setHasLoaded: jest.fn(),
      setProperty: jest.fn(),
      setLoadedValues: jest.fn(),
      setNote: jest.fn(),
    };
    wrapper.setProps({ hasLoaded: false, loadedValues: {}, ...fns });
    expect(fns.setHasLoaded).toHaveBeenCalled();
    expect(fns.setProperty).toHaveBeenCalled();
    expect(fns.setLoadedValues).toHaveBeenCalled();
    expect(fns.setNote).toHaveBeenCalled();
  });
  it('sets up the data if it finds a company and the _id is different than the loaded value', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    Companies.docs = [{ _id: 'a' }];
    const fns = {
      setHasLoaded: jest.fn(),
      setProperty: jest.fn(),
      setLoadedValues: jest.fn(),
      setNote: jest.fn(),
    };
    wrapper.setProps({ hasLoaded: true, loadedValues: { _id: 'b' }, ...fns });
    expect(fns.setHasLoaded).toHaveBeenCalled();
    expect(fns.setProperty).toHaveBeenCalled();
    expect(fns.setLoadedValues).toHaveBeenCalled();
    expect(fns.setNote).toHaveBeenCalled();
  });
  it('does not set up the data if it finds a company and has already loaded', () => {
    Meteor._userId = 'a';
    Meteor.ready = true;
    Companies.docs = [{ _id: 'a' }];
    const fns = {
      setHasLoaded: jest.fn(),
      setProperty: jest.fn(),
      setLoadedValues: jest.fn(),
      setNote: jest.fn(),
    };
    wrapper.setProps({ hasLoaded: true, loadedValues: { _id: 'a' }, ...fns });
    expect(fns.setHasLoaded).not.toHaveBeenCalled();
    expect(fns.setProperty).not.toHaveBeenCalled();
    expect(fns.setLoadedValues).not.toHaveBeenCalled();
    expect(fns.setNote).not.toHaveBeenCalled();
  });
});
