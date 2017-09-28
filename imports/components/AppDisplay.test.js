import React from 'react';
import { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import { BrowserRouter } from 'react-router-dom';

import AppDisplay, {
  renderRoute,
  verifyAuth,
  OT,
  Overlays,
} from './AppDisplay';

describe('AppDisplay Component', () => {
  const props = {};
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AppDisplay {...props} />);
  });
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  it('sets the class to blur if isOverlayOpen is true', () => {
    wrapper.setProps({ isOverlayOpen: true });
    expect(wrapper.find('.app').hasClass('blur')).toBe(true);
    wrapper.setProps({ isOverlayOpen: false });
    expect(wrapper.find('.app').hasClass('blur')).toBe(false);
  });
});
describe('Overlays Component', () => {
  const props = {};
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Overlays {...props} />);
  });
  afterEach(() => wrapper.unmount());
  it('sets the overlay background class to show if open is true', () => {
    wrapper.setProps({ open: true });
    expect(
      wrapper
        .find('.overlay-background')
        .first()
        .hasClass('show')
    ).toBe(true);
    wrapper.setProps({ open: false });
    expect(
      wrapper
        .find('.overlay-background')
        .first()
        .hasClass('show')
    ).toBe(false);
  });
  it('shows the AddCompanyConnect component if the type matches', () => {
    wrapper.setProps({ type: OT.ADD_COMPANY });
    let addCompanyConnect = wrapper
      .find('Route')
      .at(0)
      .props()
      .render();
    expect(addCompanyConnect.props.show).toBe(true);
    wrapper.setProps({ type: OT.ADD_OPPORTUNITY });
    addCompanyConnect = wrapper
      .find('Route')
      .at(0)
      .props()
      .render();
    expect(addCompanyConnect.props.show).toBe(false);
  });
  it('shows the AddOpportunityConnect component if the type matches', () => {
    wrapper.setProps({ type: OT.ADD_OPPORTUNITY });
    let addOpportunityConnect = wrapper
      .find('Route')
      .at(1)
      .props()
      .render();
    expect(addOpportunityConnect.props.show).toBe(true);
    wrapper.setProps({ type: OT.ADD_COMPANY });
    addOpportunityConnect = wrapper
      .find('Route')
      .at(1)
      .props()
      .render();
    expect(addOpportunityConnect.props.show).toBe(false);
  });
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
