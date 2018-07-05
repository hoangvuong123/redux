import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FilterLink from './FilterLink';

const setup = () => {
  const store = configureStore()({});
  const wrapper = shallow(<FilterLink filter="SHOW_ALL" store={store} />);

  return {
    store,
    wrapper
  };
};

describe('FilterLink', () => {
  test('Should renders FilterLink component', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('Should change filter', () => {
    const { wrapper, store } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.find('Link').simulate('click');
    expect(store.getActions()[0].filter).toBe('SHOW_ALL');
  });
})
