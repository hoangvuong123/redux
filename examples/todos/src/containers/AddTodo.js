// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import type { Dispatch } from '../type'

type Props = {
  handleSubmit: (string) => void
};

type State = {
  value: string
};
class AddTodo extends Component<Props, State> {
  input: HTMLInputElement;
  state = {
    value: ''
  };

  handleChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();
    if (!this.state.value.trim()) return;
    this.props.handleSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleSubmit: (value) => dispatch(addTodo(value))
})

export default connect(null, mapDispatchToProps)(AddTodo)
