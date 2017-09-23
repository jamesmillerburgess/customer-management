import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter } from 'react-router-dom';

import AppDisplay, { renderRoute, verifyAuth } from './AppDisplay';

describe('AppDisplay Component', () => {
  const props = {};
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AppDisplay {...props} />);
  });
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
});
describe('renderRoute Function', () => {
  it('renders the route', () => {
    const route = <BrowserRouter>{renderRoute({})}</BrowserRouter>;
    expect(shallow(route).exists()).toBe(true);
  });
  it('passes in a render function', () => {
    const route = <BrowserRouter>{renderRoute({})}</BrowserRouter>;
    expect(route.props.children.props.render).not.toThrow();
  });
});
describe('verifyAuth Function', () => {
  it('renders HomeConnect if auth fails', () => {
    expect(verifyAuth().type.WrappedComponent.name).toBe('HomeDisplay');
  });
  it('renders the component if the user is logged in', () => {
    const component = () => <div className="a" />;
    Meteor.loggedInUser = 'james';
    Meteor.isLoggingIn = false;
    expect(shallow(verifyAuth(component)).hasClass('a')).toBe(true);
  });
  it('renders the component if the user is logging in', () => {
    const component = () => <div className="a" />;
    Meteor.loggedInUser = null;
    Meteor.isLoggingIn = true;
    expect(shallow(verifyAuth(component)).hasClass('a')).toBe(true);
  });
});
