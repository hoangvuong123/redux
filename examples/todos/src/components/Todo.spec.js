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
    const todoComponenet = wrapper;

    expect(todoComponenet.find('li').length).toBe(1);

    todoComponenet.find('li').simulate('click');
    expect(mockOnClick).toHaveBeenCalled();

    todoComponenet.find('li').simulate('click');
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  })
})
