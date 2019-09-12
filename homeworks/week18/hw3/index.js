let list = [];
let itemId = 1;
// const itemId = list.length;
list.push({ id: 0, content: 'Enter your Todos!', done: false });
list.push({ id: 1, content: 'Morbi leo risus', done: false });

// 渲染畫面;
function render() {
  $('.list-group').empty();
  $('.list-group').append(
    list.map((item) => {
      console.log('item.id= ', item.id);
      return `<li
        class="list-group-item d-flex justify-content-between align-items-center ${item.done ? 'done' : ''}">${item.content}
        <div>
          <span class="badge badge-primary badge-pill btn-done" data-id="${item.id}" >${item.done === false ? 'mark as done' : 'Done'}</span>
          <span class="badge badge-primary badge-pill btn-delete" data-id="${item.id}">X</span>
        </div>
        </li>`;
    }),
  );
}

// 新增 todo
function addTodo() {
  let newTodo = '';
  newTodo = $('[name = new__todo]').val();
  if (newTodo !== '') {
    itemId += 1;
    list.push({ id: itemId, content: newTodo, done: false });
    $('[name = new__todo]').val('');
    render();
  }
}

// 刪除 todo
function removeTodo(event) {
  let rmId;
  if ($(event.target).hasClass('btn-delete')) {
    rmId = $(event.target).data('id');
  }
  list = list.filter(item => item.id !== rmId);
  render();
}

// 標記為已完成
function markAsDone(event) {
  if ($(event.target).hasClass('btn-done')) {
    const doneId = $(event.target).data('id');
    list.forEach((item) => {
      if (item.id === doneId) {
        /* eslint-disable no-param-reassign */
        item.done = true;
      }
    });
  }render();
}

// Event listener
$(document).ready(() => {
  render();
});
$('.list-group').click(removeTodo);
$('.list-group').click(markAsDone);
$('input').keydown((e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
  $('.btn-add').click(addTodo);
});
