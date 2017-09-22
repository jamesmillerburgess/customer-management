import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Meteor } from '../../meteorMocks.js';

import App, { verifyAuth, renderRoute } from './App.js';
import Home from './pages/Home';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
describe('renderRoute', () => {
  it('renders the route', () => {
    const route = <BrowserRouter>{renderRoute({})}</BrowserRouter>;
    expect(shallow(route).exists()).toBe(true);
  });
  it('passes in an anonymous render function', () => {
    const route = shallow(<BrowserRouter>{renderRoute({})}</BrowserRouter>);
    const component = route.prop('children').props.render();
    expect(shallow(component).exists()).toBe(true);
  });
});
describe('verifyAuth', () => {
  it('renders home if auth fails', () => {
    expect(shallow(verifyAuth()).hasClass('home')).toBe(true);
  });
  it('renders the component if the user is loggeed in', () => {
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
