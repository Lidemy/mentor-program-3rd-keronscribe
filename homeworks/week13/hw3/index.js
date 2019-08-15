const child = document.createElement('div');
let openReplyId = '';
$(document).ready(() => {
  $('.container').click((e) => {
    if (e.target.classList.contains('re')) {
      e.stopImmediatePropagation();
      // console.log('re');
      const parentId = e.target.getAttribute('data_parent');
      if (openReplyId !== parentId) {
        child.innerHTML = `<form>
        <textarea name="reply" placeholder="我的回覆" class="reply card-text"></textarea>
        <button type="button" class="btn btn-primary btn-reply" data_parent="${parentId}">送出回覆</button>
        </form>`;
        const replyParent = e.target.closest('.card-body');
        replyParent.appendChild(child);
        openReplyId = parentId;
      }
    }

    if (e.target.classList.contains('btn-reply')) {
      e.stopImmediatePropagation();
      let content = $('.reply.card-text').val();
      if (content) {
        // console.log(e.target.getAttribute('data_parent'));
        const parentId = e.target.getAttribute('data_parent');
        // console.log(parentId);
        content = `${content}`;
        // console.log(content);
        $.ajax({
          type: 'POST',
          url: 'add_comment.php',
          data: { content, parentId },
        }).done((response) => {
          // console.log(response);
          $('.reply.card-text').val('');
          const newChild = JSON.parse(response);
          // console.log(newChild);

          const newChildPost = `<div class="card child ${newChild.content_id}">
            <div class="card-header">
              ${newChild.nickname}
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <pre>${newChild.content}</pre>
                <footer class="blockquote-footer">${newChild.time}</footer>
              </blockquote>
            </div>
            <div class="option"><button type="button" class="btn btn-link btn-modify" data_id="${newChild.content_id}">修改留言</button><button class="btn btn-link btn-delete " data_id="${newChild.content_id}">刪除留言</button></div>"
          </div>`;
          console.log(newChildPost);
          $(e.target).parent().before(newChildPost);
        });
      }
    }

    if (e.target.classList.contains('btn-delete')) {
      e.stopImmediatePropagation();
      let deleteId = e.target.getAttribute('data_id');
      deleteId = `deleteId=${deleteId}`;
      console.log(deleteId);
      $.ajax({
        type: 'POST',
        url: 'handle_delete.php',
        data: deleteId,
      }).done((response) => {
        const deletedId = response;
        if ($(`.${deletedId}`)) {
          $(`.${deletedId}`).fadeOut();
        }
      });
    }
  });

  $('.btn-sent-comment').click((e) => {
    if (!($('.np').val())) {
      const content = `content=${$('.np').val()}`;
      if (content) {
        /* 發送非同步請求 */
        $.ajax({
          type: 'POST',
          url: 'add_comment.php',
          data: content,
        }).done((response) => {
          // console.log(response);
          /* 當拿到 response  */
          const newPost = JSON.parse(response);
          // console.log(newPost);
          $('.np').val('');
          /* 創造一個元素 */
          const newPostItem = `<div class="card single__post ${newPost.content_id}">
        <div class="card-header">
        ${newPost.nickname}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
          <pre>${newPost.content}</pre>
            <footer class="blockquote-footer">${newPost.time}</footer>
          </blockquote>
          <div class="option">
            <button type="button" class="btn btn-link btn-modify" data_id="${newPost.content_id}">
            修改留言
            </button>
            <button class="btn btn-link btn-delete" data_id="${newPost.content_id}">
            刪除留言
            </button>
            <button type="button" class="btn btn-outline-primary re" data_parent="${newPost.content_id}">我要回應</button>
          </div>
        </div>`;
          $(newPostItem).insertAfter($('h1'));
        });
      } else {
        e.preventDefault();
      }
    }
  });
});
