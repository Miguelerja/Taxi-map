import React from 'react';
import { shallow } from 'enzyme';

import Toggler from '../../components/Toggler';
import { findByTestAttr } from '../testUtils';

const defaultProps = {
  handleToggle: () => {},
};

const setup = (props={}, state=null) => {
  const setupProps = {...defaultProps, ...props};
  const wrapper = shallow(<Toggler {...setupProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe('renders properly', () => {
  test('renders without crashing', () => {
    const wrapper = setup();
    const toggler = findByTestAttr(wrapper, 'toggler');
    expect(toggler.length).toBe(1);
  });
  test('renders a button for Taxis', () => {
    const wrapper = setup();
    const toggleTaxis = findByTestAttr(wrapper, 'taxis');
    expect(toggleTaxis.lengt).toBe(1);
  });
  test('renders a button for cars', () => {
    const wrapper = setup();
    const toggleCars = findByTestAttr(wrapper, 'cars');
    expect(toggleCars.length).toBe(1);
  });
});
