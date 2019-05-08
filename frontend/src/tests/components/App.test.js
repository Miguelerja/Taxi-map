import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../testUtils';
import App from '../../components/App';

const setup = (state=null) => {
  const wrapper = shallow(<App />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe('renders properly', () => {
  test('renders without crashing', () => {
    const wrapper = setup();
    const app = findByTestAttr(wrapper, 'App');
    expect(app.length).toBe(1);
  });
  test('renders Loading component while info is being fetched', () => {
    const wrapper = setup({ taxis: null, cars: null });
    const loading = findByTestAttr(wrapper, 'loading');
    expect(loading.length).toBe(1);
  });
  test('unmounts Loading component and renders container when info has been fetched', () => {
    const wrapper = setup({ taxis: [{}, {}], cars: [{}, {}] });
    const loading = findByTestAttr(wrapper, 'loading');
    const container = findByTestAttr(wrapper, 'container');
    expect(loading.length).toBe(0);
    expect(container.length).toBe(1);
  });
});
