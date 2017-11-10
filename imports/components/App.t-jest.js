import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor ';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App, { hasReduxDevTools } from './App.js';
import HomeConnect from './pages/home/HomeConnect';

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
