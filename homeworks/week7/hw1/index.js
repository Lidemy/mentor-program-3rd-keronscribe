function play() {
  const waitTime = Math.floor(Math.random() * 2000) + 1000;
  let changeTime = 0;
  let clickTime = 0;
  let playable = 1;
  const timer = setTimeout(() => {
    document.querySelector('body').classList.add('hareruyaChange');
    changeTime = Date.now();
  }, waitTime);

  document.addEventListener('click', (e) => {
    if (playable) {
      console.log(playable);
      if (clickTime === 0) {
        clickTime = Date.now();
        const reactTime = (clickTime - changeTime) / 1000;
        if (changeTime !== 0) {
          alert(`你的反應時間為：${reactTime}秒`);
          document.querySelector('.replay-btn').classList.toggle('btn-noshow');
          document.querySelector('.clickMe').classList.toggle('clickable');
          playable = 0;
        } else {
          alert('還沒變色喔，失敗！');
          console.log(changeTime);
          clearTimeout(timer);
          document.querySelector('.replay-btn').classList.toggle('btn-noshow');
          document.querySelector('.clickMe').classList.toggle('clickable');
          playable = 0;
        }
      } else {
        e.preventDefult();
        playable = 0;
      }
    }
  });
}

window.onload = play;
document.querySelector('.replay-btn').addEventListener('click', (e) => {
  document.querySelector('body').classList.remove('hareruyaChange');
  document.querySelector('.replay-btn').classList.toggle('btn-noshow');
  e.stopPropagation();
  play();
});
