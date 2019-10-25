## React Router 背後的原理你猜是怎麼實作的？

我沒有猜，我大概 google 了一下。`<Route>` 會進行配對，只 render 和 path 相對應的 component。而頁面轉跳時則會用到 history 這個 library，它會拿到 現在的網址（`history`），然後在遇到 `link` 裡面放有 `to` 時，就會用一些函式做出新的連結網址。這個連結網址就會是和那個 component 相對應的 path url。

## SDK 與 API 的差別是什麼？

SDK，software development tool kit，就是軟體包的意思，有一點像是可以讓你有開發環境，可以加一些功能到正在開發的內容上的東西。而 API （Application Programming Interface）則是讓不同的 program 可以互相溝通（取得資料）的東西，有時候有些 SDK 裡面也會調用 API。

## 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？

1. 如果是同源的 Ajax，cookie 會自動把 cookie 帶上
2. 如果不同源，要在`XMLHttpRequest` 裡，把 [`withCredentials`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/withCredentials) 設為 `true`，並且在後端的 `Header`裡面，加上`Access-Control-Allow-Origin:網址` 和 `Access-Control-Allow-Credentials:true` 這兩個東西才行。
