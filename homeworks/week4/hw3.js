/*
```
 js
node hw3.js list // 印出前二十本書的 id 與書名v
node hw3.js read 1 // 輸出 id 為 1 的書籍v
node hw3.js delete 1 // 刪除 id 為 1 的書籍
node hw3.js create "I love coding" // 新增一本名為 I love coding 的書
node hw3.js update 1 "new name" // 更新 id 為 1 的書名為 new name
```
*/

const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books/?_limit=20',
    (error, response, body) => {
      const json = JSON.parse(body);
      for (let i = 0; i < json.length; i += 1) { // 用 20 在書單不滿 20 筆時會有錯誤，所以用 array 長度。
        console.log(`${json[i].id} ${json[i].name}`);
      }
    },
  );
} else if (process.argv[2] === 'read') {
  request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const json = JSON.parse(body);
      console.log(json.name);
    });
} else if (process.argv[2] === 'delete') {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`);
} else if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: { name: process.argv[3] },
    },
    (error, response, body) => {
      console.log(body);
    },
  );
} else if (process.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: process.argv[4],
      },
    },
    (error, response, body) => {
      console.log(body);
    },
  );
}
