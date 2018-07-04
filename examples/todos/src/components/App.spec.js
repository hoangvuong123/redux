import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

const setup = (setupProps = {}) => {
  const wrapper = shallow(<App/>);
  return { wrapper };
};

describe('App component', () => {
  it('render App component', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
