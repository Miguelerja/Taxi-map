import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../../components/Loading';
import { findByTestAttr } from '../testUtils';

const setup = () => {
  return shallow(<Loading />)
};

describe('renders properly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('renders without crashing', () => {
    const loading = findByTestAttr(wrapper, 'loading');

    expect(loading.length).toBe(1);
  });
});

describe('lifecycle methods work properly', () => {
  jest.useFakeTimers();

  test('sets interval for half a second on component mount', () => {    
    expect(setInterval).toHaveBeenCalledTimes(1);
  });
  test('clears interval when unmounted', () => {
    const wrapper = setup();
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalledTimes(1);  
  });
});
