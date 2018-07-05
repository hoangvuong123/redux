import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  it('Should render Footer component', () => {
    const wrapper = shallow(<Footer/>);
    expect(wrapper).toMatchSnapshot();
  })
})
