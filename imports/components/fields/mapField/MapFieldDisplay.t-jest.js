import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import MapFieldDisplay, * as MFD from './MapFieldDisplay';

describe('MapFieldDisplay', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<MFD.innerComponent {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('renders without error', () => {});
  it('renders a loading div if there is no defaultCenter', () => {
    wrapper.setProps({ defaultCenter: {} });
    expect(wrapper.hasClass('map-field-loading')).toBe(true);
  });
  it('renders a GoogleMap if there is a defaultCenter', () => {
    wrapper.setProps({
      defaultCenter: { lat: 2, lng: 2 },
      markers: [{ lat: 2, lng: 2 }],
    });
    expect(wrapper.hasClass('map-field-loading')).toBe(false);
    expect(wrapper.name()).toBe('GoogleMap');
  });
});
