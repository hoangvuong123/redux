import React from 'react'
import renderer from 'react-test-renderer';
import Link from './Link'

describe('Link component', () => {
  it('render Link component', () => {
      const link = renderer.create(<Link />).toJSON()
      expect(link).toMatchSnapshot();
  })
})
