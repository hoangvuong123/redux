import React from 'react'
import renderer from 'react-test-renderer';
import Todo from './Todo'

describe('Todo component', () => {
  it('render Todo component', () => {
    let onClick = () => "onClick Function"

    const todo = renderer.create(
      <Todo onClick={onClick} completed={true} text="todo 1"/>
    ).toJSON()
    expect(todo).toMatchSnapshot();
  })
})
