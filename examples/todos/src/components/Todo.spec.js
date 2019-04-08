import React from 'react'
import { shallow } from 'enzyme';
import Todo from './Todo'

const setup = (mockOnClick) => {
  const wrapper = shallow(<Todo onClick={mockOnClick} completed={true} text="todo 1"/>);
  return { wrapper };
};

describe('Todo component', () => {
  const mockOnClick = jest.fn();

  it('Should render Todo component', () => {
    const { wrapper } = setup(mockOnClick);
    expect(wrapper).toMatchSnapshot();
  })

  it('Should call click event', () => {
    const { wrapper } = setup(mockOnClick);

    expect(wrapper.find('li').length).toBe(1);

    wrapper.find('li').simulate('click');
    expect(mockOnClick).toHaveBeenCalled();

    wrapper.find('li').simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  })
})
