import React from 'react'
import { shallow } from 'enzyme';
import Link from './Link'

const setup = () => {
  const wrapper = shallow(<Link/>);
  return { wrapper };
};

describe('Link component', () => {
  it('Should render Link component', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  })
})
