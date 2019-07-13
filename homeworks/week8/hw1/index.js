function oops() {
  document.querySelector('.container').classList.add('bg__oops');
  alert('系統不穩定，請再試一次');
}

document.querySelector('.lottery').addEventListener('click', () => {
  const request = new XMLHttpRequest();
  const url = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
  request.open('GET', url, true);
  const cotainer = document.querySelector('.container').classList;
  const lotteryResult = document.querySelector('.result');

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const result = JSON.parse(request.responseText);
      const lottery = document.querySelector('.lottery');
      lottery.classList.add('no__show');
      lotteryResult.classList.toggle('no__show');
      if (result.prize === 'FIRST') {
        cotainer.add('bg__first');
        lotteryResult.innerHTML = `
        <p>恭喜你中頭獎了！&#127882;<br>日本東京來回雙人遊！</p>
        <div class="img"><img src="./plane.png"  heigh='100px' width='100px' /></div>`;
      } else if (result.prize === 'SECOND') {
        cotainer.add('bg__second');
        lotteryResult.innerHTML = `
        <p>二獎！&#127881;<br>90 吋電視一台！</p>
        <div class="img"><img src="./tv.png" heigh='100px' width='100px' /></div>`;
      } else if (result.prize === 'THIRD') {
        cotainer.add('bg__third');
        lotteryResult.innerHTML = `
        <p>恭喜你抽中三獎：&#128079;<br>知名 YouTuber 簽名握手會入場券一張，bang！</p>
        <div class="img"><img src="./youtube.png" heigh='100px' width='100px' /></div>`;
      } else if (result.prize === 'NONE') {
        cotainer.add('bg__none');
        document.querySelector('.main').classList.add('none');
        lotteryResult.innerHTML = `
        <p style='font-size:45px'>銘謝惠顧 <span style='font-size:70px;'>&#128517;</span></p>`;
      }
    } else {
      oops();
    }
  };
  request.send(null);
});
