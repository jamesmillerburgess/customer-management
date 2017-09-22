import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Meteor } from '../../meteorMocks.js';

import App, { verifyAuth, renderRoute, hasReduxDevTools } from './App.js';
import HomeConnect from './pages/HomeConnect';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
describe('hasReduxDevTools Function', () => {
  it('returns null if constant is not defined', () => {
    window.__REDUX_DEVTOOLS_EXTENSION__ = null;
    expect(hasReduxDevTools()).toBe(null);
  });
  it('returns null if constant is not a function', () => {
    window.__REDUX_DEVTOOLS_EXTENSION__ = {};
    expect(hasReduxDevTools()).toBe(false);
  });
  it('returns the function result otherwise', () => {
    window.__REDUX_DEVTOOLS_EXTENSION__ = () => 1;
    expect(hasReduxDevTools()).toBe(1);
  });
});
describe('renderRoute', () => {
  it('renders the route', () => {
    const route = <BrowserRouter>{renderRoute({})}</BrowserRouter>;
    expect(shallow(route).exists()).toBe(true);
  });
  it('passes in a render function', () => {
    const route = <BrowserRouter>{renderRoute({})}</BrowserRouter>;
    expect(route.props.children.props.render).not.toThrow();
  });
});
describe('verifyAuth', () => {
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
