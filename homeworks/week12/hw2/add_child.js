const child = document.createElement('div');
const wrapper = document.querySelector('.op__wrapper');

wrapper.addEventListener('click', (e) => {
  if (e.target.getAttribute('data_parent')) {
    const parentId = e.target.getAttribute('data_parent');
    console.log(parentId);
    child.innerHTML = `<form action='add_comment.php' method="POST">
    <textarea type="textarea" name="npComment" placeholder="留言" class="textarea"></textarea>
    <input type="hidden" name="data-parentId" value="${parentId}">
    <input type="submit" name="submit">
    </form>`;
    const replyParent = e.target.closest('.single__post');
    console.log(replyParent);
    replyParent.appendChild(child);
  }
});
