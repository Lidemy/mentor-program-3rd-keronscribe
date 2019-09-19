// 宣告所有函式
// 拿所有 todos
function getAllTodos(type) {
  $.ajax({
    type: 'GET',
    url: 'http://keronscribe.tw/mtr-todos/todos.php',
  }).done((response) => {
    const todos = JSON.parse(response);
    let todolist = '';
    if (type === 'all') {
      console.log('start getting all');
      for (let i = 0; i < todos.length; i += 1) {
        todolist += `<li class="todo-item"><div><span class="checkbox" data-id="${todos[i].id}" data-done="${todos[i].done}">${(todos[i].done === '1') ? '&#9745;' : '&#9744;'}</span>${todos[i].todo}</div><span class="btn-delete" data-deleteId="${todos[i].id}">X</span>  
        </li>`;
        $('.list-group').html(todolist);
      }
      $('#all').addClass('active');
      $('#active').removeClass('active');
      $('#done').removeClass('active');
    } else if (type === 'active') {
      console.log('start getting active');
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].done === '0') {
          todolist += `<li class="todo-item"><div><span class="checkbox" data-id="${todos[i].id}" data-done="${todos[i].done}">${(todos[i].done === '1') ? '&#9745;' : '&#9744;'}</span>${todos[i].todo}</div><span class="btn-delete" data-deleteId="${todos[i].id}">X</span>  
          </li>`;
        }
      }
      $('.list-group').html(todolist);
      $('#all').removeClass('active');
      $('#active').addClass('active');
      $('#done').removeClass('active');
    } else if (type === 'done') {
      for (let i = 0; i < todos.length; i += 1) {
        if (todos[i].done === '1') {
          todolist += `<li class="todo-item"><div><span class="checkbox" data-id="${todos[i].id}" data-done="${todos[i].done}">${(todos[i].done === '1') ? '&#9745;' : '&#9744;'}</span>${todos[i].todo}</div><span class="btn-delete" data-deleteId="${todos[i].id}">X</span>  
          </li>`;
        }
      }
      $('.list-group').html(todolist);
      $('#all').removeClass('active');
      $('#active').removeClass('active');
      $('#done').addClass('active');
    }
  });
}

// 新增 todos 並 rander
function addTodo(newTodo) {
  const newTodoParam = `newTodo=${newTodo}`;
  $.ajax({
    type: 'POST',
    url: `http://keronscribe.tw/mtr-todos/todos.php?${newTodoParam}`,
  }).done((response) => {
    const theNewTodo = JSON.parse(response);
    const todo = `<li class="todo-item"><div><span class="checkbox"data-id="${theNewTodo.id}" data-done="${theNewTodo.done}">&#9744; </span>${theNewTodo.todo}</div><span class="btn-delete" data-deleteId="${theNewTodo.id}">X</span>
      </li>`;
    $('.list-group').append(todo);
    // TODO 這裡猶豫要全部重render 還是不要。
  });
}
// 修改 todo 狀態
function updateTodo(updateId, status) {
  let done = 1;
  if (status === '1') {
    done = 0;
  }
  done = `done=${done}`;
  const id = `updateId=${updateId}`;
  $.ajax({
    type: 'PATCH',
    url: `http://keronscribe.tw/mtr-todos/todos.php?${id}&${done}`,
  }).done((response) => {
    console.log(response);
    const updated = JSON.parse(response);
    const updateAttr = `[data-id="${updated.update_id}"]`;
    const theUpdateCheckbox = $(updateAttr);
    if (updated.is_done === '1') {
      theUpdateCheckbox.html('&#9745;');
      theUpdateCheckbox.attr('data-done', '1');
    } else {
      theUpdateCheckbox.html('&#9744;');
      theUpdateCheckbox.attr('data-done', '0');
    }
  });
}
// 刪除 todo
function deleteTodo(deleteId) {
  const id = `deleteId=${deleteId}`;
  $.ajax({
    type: 'DELETE',
    url: `http://keronscribe.tw/mtr-todos/todos.php?${id}`,
  }).done((response) => {
    const deleted = JSON.parse(response);
    const deletedAttr = `[data-deleteId="${deleted.deleted_id}"]`;
    const theDeletedElement = $(deletedAttr);
    theDeletedElement.parent().fadeOut();
  });
}


$(document).ready(getAllTodos('all'));

// 發送新增 todo
$('.input_newtodo').keypress((event) => {
  const keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode === 13) {
    const newTodo = $('.input_newtodo').val();
    addTodo(newTodo);
    $('.input_newtodo').val('');
  }
});

// 修改狀態
$('.list-group').click((event) => {
  if ($(event.target).hasClass('checkbox')) {
    const updateId = $(event.target).attr('data-id');
    const status = $(event.target).attr('data-done');
    updateTodo(updateId, status);
  }
});

// 刪除 todo
$('.list-group').click((event) => {
  if ($(event.target).hasClass('btn-delete')) {
    const deleteId = $(event.target).attr('data-deleteId');
    deleteTodo(deleteId);
  }
});

$('.nav__all').click(() => {
  getAllTodos('all');
});
$('.nav__active').click(() => {
  getAllTodos('active');
});
$('.nav__done').click(() => {
  getAllTodos('done');
});
