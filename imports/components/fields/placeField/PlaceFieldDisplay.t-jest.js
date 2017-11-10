import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PlaceFieldDisplay, * as PFD from './PlaceFieldDisplay';

describe('PlaceFieldDisplay.js', () => {
  describe('onSearchBoxMounted Function', () => {
    it('calls setState', () => {
      const thing = {
        setState: jest.fn(),
        onSearchBoxMounted: PFD.onSearchBoxMounted,
      };
      thing.onSearchBoxMounted('a');
      expect(thing.setState).toHaveBeenCalledWith({ refs: { searchBox: 'a' } });
    });
  });
  describe('onPlacesChanged Function', () => {
    it('calls onChange', () => {
      const thing = {
        props: { onChange: jest.fn() },
        state: {
          refs: {
            searchBox: { getPlaces: jest.fn().mockImplementation(() => ['a']) },
          },
        },
        onPlacesChanged: PFD.onPlacesChanged,
      };
      thing.onPlacesChanged();
      expect(thing.props.onChange).toHaveBeenCalledWith('a');
    });
  });
  describe('componentWillMount Function', () => {
    it('calls setState', () => {
      const thing = {
        setState: jest.fn(),
        componentWillMount: PFD.componentWillMount,
      };
      thing.componentWillMount();
      expect(thing.setState).toHaveBeenCalled();
    });
  });
  describe('InnerComponent Component', () => {
    let wrapper;
    const props = {};
    beforeEach(() => {
      wrapper = shallow(<PFD.InnerComponent {...props} />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('renders without error', () => {});
  });
});
