/* eslint-disable */

import React, { useState } from 'react';
import './style.css';

const TodoList = ({ todo, handleCheck, handleDelete }) => {
  const check = () => {
    handleCheck(todo.id);
  };

  const deleteTodo = () => {
    handleDelete(todo.id);
  };

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <li className="todo-item">
      <div>
        {(todo.done)
          ? <span className="checkbox" onClick={check}>&#9745;</span>
          : <span className="checkbox" onClick={check}>&#9744;</span>}
        {todo.text}
      </div>
      <span className="btn-delete" onClick={deleteTodo}>X</span>
    </li>
  );
};

export default function TodoApp() {
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [chosenSide, setChosenSide] = useState('all');

  const handleTodos = (e) => {
    const todoText = document.querySelector('.input_newtodo');
    if (e.key === 'Enter' && todoText.value) {
      setTodos([
        ...todos, {
          id,
          text: todoText.value,
          done: false,
        },
      ]);
      const newId = id + 1;
      setId(newId);
      todoText.value = '';
    }
  };

  const handleDelete = (selectedId) => {
    const remained = todos.filter(todo => todo.id !== selectedId);
    setTodos(remained);
  };

  const handleCheck = (selectedId) => {
    console.log(selectedId);
    const remainedTodos = [...todos];
    const result = remainedTodos.map((todo) => {
      if (todo.id === selectedId) {
        return (todo.done ? { ...todo, done: false } : { ...todo, done: true });
      } return todo;
    });
    result.map(item => console.log(item));
    setTodos(
      result,
    );
  };

  const handleSide = (side) => {
    setChosenSide(side);
  };

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
            onKeyPress={handleTodos}
          />
        </div>
        <div className="todos">
          <div className="nav">
            <div className="remained_numbers" />
            <ul className="nav__btns">
              <li className="nav__all nav__btn" id="all" onClick={() => { handleSide('all'); }}>All</li>
              <li className="nav__active nav__btn" id="active" onClick={() => { handleSide('active'); }}>
              Active
              </li>
              <li className="nav__done nav__btn" id="done" onClick={() => { handleSide('done'); }}>Done</li>
            </ul>
          </div>
          <ul className="list-group">
            {todos
              .filter(todo => (chosenSide === 'done' ? todo.done : true))
              .filter(todo => (chosenSide === 'active' ? (!todo.done) : true)).map(todo => <TodoList key={todo.id} todo={todo} handleDelete={handleDelete} handleCheck={handleCheck} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}
