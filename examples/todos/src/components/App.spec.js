import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = () => {
  const wrapper = shallow(<App/>);
  return { wrapper };
};

describe('App component', () => {
  it('Should render App component', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  })
})
