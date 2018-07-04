import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './Footer';

const setup = (setupProps = {}) => {
  const wrapper = shallow(<Footer/>);
  return { wrapper };
};

describe('Link component', () => {
  it('render Link component', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
