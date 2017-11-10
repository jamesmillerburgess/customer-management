import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import WidgetPlaceholder from './WidgetPlaceholder';

describe('WidgetPlaceholder Component', () => {
  let wrapper;
  const props = { buttonPath: '/', text: ['a'] };
  beforeEach(() => {
    wrapper = shallow(<WidgetPlaceholder {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
});
