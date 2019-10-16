/* eslint-disable */

import React from 'react';

function TodoList  ({ todo, handleCheck, handleDelete }) {
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

export default TodoList
