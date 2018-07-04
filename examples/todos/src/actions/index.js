// @flow

let nextTodoId = 0
export const addTodo = (text: string): Object => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter: string): Object => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id: number): Object => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
