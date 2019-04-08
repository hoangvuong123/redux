import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './AddTodo';
import configureStore from 'redux-mock-store';

const setup = () => {
  const store = configureStore()({ todos: [] });
  const wrapper = shallow(<AddTodo store={store}/>);

  return { store, wrapper };
};

describe('AddTodo component', () => {
  it('Should render AddTodo component', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  })

  it('handle Submit', () => {
    const { wrapper, store } = setup();
    const fakeEvent = { preventDefault: () => 'preventDefault' };
    const addTodoComponent = wrapper.dive();
    const instance = addTodoComponent.instance();
    instance.setState ({
      value: 'Add Todo'
    });

    expect(addTodoComponent.find('form').length).toBe(1);
    addTodoComponent.find('form').simulate('submit', fakeEvent);
    expect(store.getActions()).toEqual([
      { id: 0, text: 'Add Todo', type: 'ADD_TODO' }
    ]);
  })

})
