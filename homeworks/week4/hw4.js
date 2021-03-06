/*
參考 [Twitch API](https://dev.twitch.tv/docs/api/) 的文件，寫一隻程式去呼叫 Twitch API，並拿到「最受歡迎的遊戲列表（Get Top Games）」然後依序印出 id 跟遊戲名稱。

``` js
node hw4.js

21779 League of Legends
29595 Dota2
511224 Apex Legends
33214 Fortnite
....
```
*/
const request = require('request');

const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'cmusgdkyxzvo9eoomtbqk86powczqc',
  },
};

request.get(options, (error, response, body) => {
  const json = JSON.parse(body);
  for (let i = 0; i < json.data.length; i += 1) {
    console.log(`${json.data[i].id}   ${json.data[i].name}`);
  }
});
