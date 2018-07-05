import React from 'react'
import { shallow } from 'enzyme';
import Link from './Link'

describe('Link component', () => {
  it('Should render Link component', () => {
    const wrapper = shallow(<Link/>);
    expect(wrapper).toMatchSnapshot();
  })
})
