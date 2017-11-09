import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import FieldList, * as FL from './FieldList';

describe('FieldList.js', () => {
  describe('FieldComponent Component', () => {
    let wrapper;
    const props = { field: { name: 'a' } };
    beforeEach(() => {
      wrapper = shallow(<FL.FieldComponent {...props} />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('calls setProp on change', () => {
      const setProp = jest.fn();
      wrapper.setProps({ setProp });
      wrapper.props().onChange();
      expect(setProp).toHaveBeenCalled();
    });
  });
  describe('FieldList', () => {
    let wrapper;
    const props = { fields: [{ name: 'a', label: 'b' }] };
    beforeEach(() => {
      wrapper = shallow(<FieldList {...props} />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
    it('renders without error', () => {});
  });
});
