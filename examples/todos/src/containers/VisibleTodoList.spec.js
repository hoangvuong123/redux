import { getVisibleTodos } from './VisibleTodoList'
import { VisibilityFilters } from '../actions'

let todos = [{id: 1, completed: false, text: 'a test text'}]

describe('get visible todo list', () => {
  it('should filter SHOW_ALL', () => {
    expect(
        getVisibleTodos(todos, VisibilityFilters.SHOW_ALL)
    ).toEqual(todos)
  })

  it('should filter SHOW_COMPLETED', () => {
    expect(
        getVisibleTodos(todos, VisibilityFilters.SHOW_COMPLETED)
    ).toEqual([])
  })

  it('should filter SHOW_ACTIVE', () => {
    expect(
        getVisibleTodos(todos, VisibilityFilters.SHOW_ACTIVE)
    ).toEqual(todos)
  })

  it('should throw Exception', () => {
    let filter = 'NOT A VALID FILTER'

    expect(() => {
        getVisibleTodos(todos, filter)
    }).toThrow(Error);

    expect(() => {
        getVisibleTodos(todos, filter)
    }).toThrow('Unknown filter: ' + filter);
  })

})
