const url = 'https://lidemy-book-store.herokuapp.com/posts';

function getPosts(limitNumber) {
  const request = new XMLHttpRequest();
  const limit = `_limit=${limitNumber}`;
  request.open('GET', `${url}?${limit}&_sort=id&_order=desc`, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const responseText = JSON.parse(request.responseText);
      for (let i = 0; i < responseText.length; i += 1) {
        const thePostId = responseText[i].id;
        const thePostContent = responseText[i].content;
        const thePostDiv = document.createElement('div');
        thePostDiv.classList.add('op');
        thePostDiv.innerHTML = `<div class="id">${thePostId} 留下了：</div>
        <div class="post">${thePostContent}</div>`;
        document.querySelector('.op__wrapper').appendChild(thePostDiv);
      }
    } else {
      alert('err');
    }
  };
  request.send('null');
}

window.onload = getPosts(20);

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const request = new XMLHttpRequest();
  let newContent = document.querySelector('textarea[name=content]').value;
  newContent = `content=${newContent}`;
  request.open('POST', url, true);
  request.onload = function () {
    const responseText = JSON.parse(request.responseText);
    const thePostId = responseText.id;
    const thePostContent = responseText.content;
    const thePostDiv = document.createElement('div');
    const postWrapper = document.querySelector('.op__wrapper');
    thePostDiv.classList.add('op');
    thePostDiv.innerHTML = `<div class="id">${thePostId} 留下了：</div>
      <div class="post">${thePostContent}</div>`;
    postWrapper.insertBefore(thePostDiv, postWrapper.childNodes[0]);
  };
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(newContent);
  document.querySelector('textarea[name=content]').value = '';
});
