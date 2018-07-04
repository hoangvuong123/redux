import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddTodo from './AddTodo';
import configureStore from 'redux-mock-store';

const setup = (setupProps = {}) => {
  const store = configureStore()({ todos: [] });
  const wrapper = shallow(<AddTodo store={store}/>);

  return { store, wrapper };
};

describe('AddTodo component', () => {
  it('render AddTodo component', () => {
    const { wrapper } = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('handle Submit', () => {
    const { wrapper, store } = setup();
    const fakeEvent = { preventDefault: () => 'preventDefault' };
    const addTodoComponent = wrapper.dive();
    const instance = addTodoComponent.instance();
    instance.state.value = 'Add Todo'

    expect(addTodoComponent.find('form').length).toBe(1);
    addTodoComponent.find('form').simulate('submit', fakeEvent);
    expect(store.getActions()).toEqual([
      { id: 0, text: 'Add Todo', type: 'ADD_TODO' }
    ]);
  })

})
