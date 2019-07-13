## 什麼是 Ajax？
Ajax 的英文全名是 Asynchronous JavaScript and XML，非同步請求，這個做法讓瀏覽器在送出請求之後，不用僵在那裡苦等 response 回來就可以進行其他操作。然後等到 reponse 回來時，會執行 callback function。

## 用 Ajax 與我們用表單送出資料的差別在哪？
表單送出時會有畫面重整，我們會整個離開原本的頁面，而用 Ajax 則會留在原本的頁面上和 sever 交換資料，等 response 回來之後，我們再用 JavaScript 把資料放到畫面上。

## JSONP 是什麼？
JSON with Padding，利用 `<script>` 標籤不受同源政策限制的特性，繞過瀏覽器限制進行資料交換的一種方式。

## 要如何存取跨網域的 API？
主要要看 API 提供方的限制，提供方必須在 response 中包含 access-control-allow-origin ，並且我們的網域位置要受到許可才可以透過瀏覽器拿到資料。另外，這些政策基本上是瀏覽器的限制，如果用 Node.js 等環境去接 API ，就沒有限制。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
如上題所述，同源政策的限制是瀏覽器的限制，request 一樣會被發送，response 一樣會回來，差別在於瀏覽器判定這是一個非同源的資料的時候會拒絕這份資料。第四週時我們用來接 API 的環境並不是瀏覽器，所以當時沒有這些問題。