function httpGet(url, id) {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.setRequestHeader('Client-ID', id);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.send('null');
  request.onload = function () {
    const responseText = JSON.parse(request.responseText);
    console.log(responseText);
    for (let i = 0; i < responseText.streams.length; i += 1) {
      const gameImg = responseText.streams[i].preview.small;
      const playerImg = responseText.streams[i].channel.logo;
      const playerDescript = responseText.streams[i].channel.description;
      const playName = responseText.streams[i].channel.display_name;
      const playUrl = responseText.streams[i].channel.url;
      const gameWrapper = document.querySelector('.game__wrapper');
      const theGame = document.createElement('div');
      theGame.classList = 'singlegame';
      theGame.innerHTML = `
          <a href="${playUrl}">
          <div><img class="game__img" src="${gameImg}"></div>
        <div class="player">
          <div>
            <img class="player__img" src="${playerImg}">
          </div>
          <div class="player__info">
            <div class="player__description">${playerDescript}</div>
            <div class="player__name">${playName}</div>
          </div>
        </div></a>`;
      gameWrapper.appendChild(theGame);
    }
  };
}

function twichAPI() {
  const id = 'cmusgdkyxzvo9eoomtbqk86powczqc';
  const url = 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&limit=20';
  httpGet(url, id);
}


window.onload = twichAPI;
