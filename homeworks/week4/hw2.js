/*
用 node.js 寫出一個程式並接受參數，輸出相對應的結果，範例如下：

``` js
node hw2.js list // 印出前二十本書的 id 與書名
node hw2.js read 1 // 輸出 id 為 1 的書籍資料
```

*/
const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books/?_limit=20',
    (error, response, body) => {
      const json = JSON.parse(body);
      for (let i = 0; i < 20; i += 1) {
        console.log(`${json[i].id} ${json[i].name}`);
      }
    });
} else if (process.argv[2] === 'read') {
  request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const json = JSON.parse(body);
      console.log(json.name);
    });
}
