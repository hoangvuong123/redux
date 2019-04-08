import React from 'react'
import { shallow } from 'enzyme';
import TodoList from './TodoList'

const setup = () => {
  let todos= [{
    id: 1,
    completed: false,
    text: 'todo 1'
  },{
    id: 2,
    completed: true,
    text: 'todo 2'
  }]

  const wrapper = shallow(<TodoList todos={todos}/>);
  return { wrapper };
};

describe('TodoList component', () => {
  it('Should render TodoList component', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  })
})
