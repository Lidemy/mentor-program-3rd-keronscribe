function init() {
  const request = new XMLHttpRequest();
  const url = 'https://lidemy-book-store.herokuapp.com/posts';
  const limit = '_limit=20';
  request.open('GET', `${url}?${limit}`, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const responseText = JSON.parse(request.responseText);
      for (let i = 0; i < responseText.length; i += 1) {
        const thePostId = responseText[i].id;
        const thePostContent = responseText[i].content;
        const thePostDiv = document.createElement('div');
        thePostDiv.classList.add('op');
        thePostDiv.innerHTML = `<div class="id">${thePostId}</div>
        <div class="post">${thePostContent}</div>`;
        document.querySelector('.op__wrapper').appendChild(thePostDiv);
      }
    } else {
      alert('err');
    }
  };
  request.send('null');
}

window.onload = init();
