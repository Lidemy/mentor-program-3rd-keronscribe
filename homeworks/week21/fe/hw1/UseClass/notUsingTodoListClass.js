/* eslint-disable */

import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.check = this.check.bind(this);
  }

  delete() {
    const { todo, handleDelete } = this.props;
    handleDelete(todo.id);
  }

  check() {
    const {todo, handleCheck} = this.props;
    handleCheck(todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <li className="todo-item">
        <div>
          {(todo.done)
            ? <span className="checkbox" onClick={this.check}>&#9745;</span>
            : <span className="checkbox" onClick={this.check}>&#9744;</span>}
          {todo.text}
        </div>
        <span className="btn-delete" onClick={this.delete}>X</span>
      </li>
    );
  }
}
export default TodoList;
