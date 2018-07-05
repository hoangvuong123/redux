// @flow

import * as React from 'react'
import Todo from './Todo'

type TodoListType = {
  todos: Array<{
    id: number,
    completed: boolean,
    text: string
  }>,
  toggleTodo: (id: number) => void
}

const TodoList = ({ todos, toggleTodo }: TodoListType) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
