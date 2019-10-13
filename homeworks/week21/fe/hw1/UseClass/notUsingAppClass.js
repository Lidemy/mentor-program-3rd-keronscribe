/* eslint-disable */

import React, { Component } from 'react';
import './style.css';
import TodoList from './notUsingTodos.js/index.js';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: 'all',
    };
    this.id = 0;
    this.handleTodos = this.handleTodos.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handlefilter = this.handlefilter.bind(this);
  }

  handleTodos(e) {
    const { todos } = this.state;
    const todoText = document.querySelector('.input_newtodo');
    if (e.key === 'Enter' && todoText.value) {
      this.setState({
        todos: [...todos, {
          id: this.id,
          text: todoText.value,
          done: false,
        }],
      });
      this.id += 1;
      todoText.value = '';
    }
  }

  handleDelete(id) {
    console.log(id);
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });
  }

  handleCheck(id) {
    console.log(id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          if (todo.done) {
            return {
              ...todo,
              done: false,
            };
          }
          return {
            ...todo,
            done: true,
          };
        } return todo;
      }),
    });
  }

  handlefilter(e) {
    const nowAt = e.target.classList;
    if (nowAt.contains('nav__active')) {
      this.setState({
        filter: 'active',
      });
    } else if (nowAt.contains('nav__done')) {
      this.setState({
        filter: 'done',
      });
    } else {
      this.setState({
        filter: 'all',
      });
    }
  }

  render() {
    const { todos, filter } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="container">
        <h1 className="title">TODOS</h1>
        <div className="wrapper">
          <div className="input">
          &#9744;
            <input
              className="input_newtodo"
              type="text"
              placeholder="What needs to be done?"
              onKeyPress={this.handleTodos}
            />
          </div>
          <div className="todos">
            <div className="nav">
              <div className="remained_numbers" />
              <ul className="nav__btns">
                <li className="nav__all nav__btn" id="all" onClick={this.handlefilter}>All</li>
                <li className="nav__active nav__btn" id="active" onClick={this.handlefilter}>
                Active
                </li>
                <li className="nav__done nav__btn" id="done" onClick={this.handlefilter}>Done</li>
              </ul>
            </div>
            <ul className="list-group">
              {todos.filter(todo => (filter === 'done' ? todo.done : true)).filter(todo => (filter === 'active' ? !todo.done : true)).map(todo => <TodoList key={todo.id} todo={todo} handleDelete={this.handleDelete} handleCheck={this.handleCheck} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default TodoApp;
