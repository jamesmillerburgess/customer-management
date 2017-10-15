import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import TeamField, {
  optionRenderer,
  valueRenderer,
  loadOptions,
} from './TeamField';

describe('TeamField Component', () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<TeamField />)));
  afterEach(() => wrapper.unmount());
  it('renders without error', () => {});
  describe('optionRenderer Function', () => {
    it('does not throw', () => {
      expect(() => shallow(optionRenderer({ members: [] }))).not.toThrow();
    });
    it('renders a badge if there is at least one member', () => {
      const optionRendererWrapper = shallow(optionRenderer({ members: [{}] }));
      expect(
        optionRendererWrapper.containsMatchingElement(<div>{1}</div>)
      ).toBe(true);
    });
  });
  describe('valueRenderer Function', () => {
    it('does not throw', () => {
      expect(() => shallow(valueRenderer({ members: [] }))).not.toThrow();
    });
  });
  describe('loadOptions Function', () => {
    it('calls the team.search Meteor Method', () => {
      const teamSearch = jest.fn();
      Meteor._methods['team.search'] = teamSearch;
      Meteor.res = [];
      loadOptions('a', () => null);
      expect(teamSearch).toHaveBeenCalledTimes(1);
    });
    it('calls the callback', () => {
      const cb = jest.fn();
      loadOptions('a', cb);
      expect(cb).toHaveBeenCalledTimes(1);
    });
    it('handles errors', () => {
      Meteor.err = 'err';
      expect(() => loadOptions('a', () => null)).not.toThrow();
    });
  });
});
