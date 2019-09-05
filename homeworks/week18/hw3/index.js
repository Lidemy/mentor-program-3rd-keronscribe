let list = ['Enter your Todos!', 'Morbi leo risus'];

// 渲染畫面
function render() {
  $('.list-group').empty();
  $('.list-group').append(list.map(item => `<li
  class="list-group-item d-flex justify-content-between align-items-center">${item}<div>
    <span class="badge badge-primary badge-pill btn-delete" data-id="${list.indexOf(item)}">X</span>
  </div>
</li>`));
}

// 新增 todo
function addTodo() {
  let newTodo = '';
  newTodo = $('[name = new__todo]').val();
  if (newTodo !== '') {
    list.push(newTodo);
    $('[name = new__todo]').val('');
    render();
  }
}

// 刪除 todo
function removeTodo(event) {
  let id;
  if ($(event.target).hasClass('btn-delete')) {
    id = $(event.target).data('id');
  }
  list = list.filter(item => list.indexOf(item) !== id);
  render();
}

// Event listener
$(document).ready(() => {
  render();
  $('input').keydown((e) => {
    if (e.key === 'Enter') {
      render();
    }
  });
  $('.btn-add').click(addTodo);
  $('.list-group').click(removeTodo);
});
