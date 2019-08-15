function addTodo() {
  let newTodo = '';
  newTodo = $('[name = new__todo]').val();
  if (newTodo === '') {
    return;
  }
  const newTodoItem = `<li
        class="list-group-item d-flex justify-content-between align-items-center">${newTodo}<div>
          <span class="badge badge-primary badge-pill btn-done">mark as done</span>
          <span class="badge badge-primary badge-pill btn-delete">X</span>
        </div>
      </li>`;
  $('.list-group').append(newTodoItem);
  $('[name = new__todo]').val('');
}

function markAsDone(event) {
  if ($(event.target).hasClass('btn-done')) {
    const a = $(event.target).closest('span');
    a.text('Done');
    a.addClass('todo__done');
    a.closest('li').addClass('active');
  }
}

function deleteTodo(event) {
  if ($(event.target).hasClass('btn-delete')) {
    $(event.target).parent().parent().remove();
  }
}

$(document).ready(() => {
  $('input').keydown((e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  });
  $('.btn-add').click(addTodo);
  $('.list-group').click(deleteTodo);
  $('.list-group').click(markAsDone);
});
