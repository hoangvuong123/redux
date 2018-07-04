import React from 'react'
import renderer from 'react-test-renderer';
import TodoList from './TodoList'

describe('TodoList component', () => {
  it('render TodoList component', () => {
      let todos= [{
        id: 1,
        completed: false,
        text: 'todo 1'
      },{
        id: 2,
        completed: true,
        text: 'todo 2'
      }]

      const todoList = renderer.create(<TodoList todos={todos}/>).toJSON()
      expect(todoList).toMatchSnapshot();
  })
})
