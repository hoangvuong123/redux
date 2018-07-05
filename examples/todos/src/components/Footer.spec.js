import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const setup = () => {
  const wrapper = shallow(<Footer/>);
  return { wrapper };
};

describe('Footer component', () => {
  it('Should render Footer component', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  })
})
