## 為什麼我們需要 React？可以不用嗎？

React 是一種可以方便把邏輯和 UI 綁在一起的 library。並且藉由 ReactDOM 優秀的比對 Virtual DOM 和 Browser 的 DOM 後進行修改處 re-render 作法，可以節省很多效能。如果不使用 React，也是可以自己想辦法用相同邏輯把資料和畫面綁定起來，但是會非常耗能。

## React 的思考模式跟以前的思考模式有什麼不一樣？

我認為 React 的思考模式和以往最大的差異是把資料和結構細分開來，原本寫法會在 HTML 裡面包含網頁的架構和內容，而因為 React 可以把網頁架構和資料部分分開，又再加上把架構變成由各個組件構成，所以就可以達到可以用資料狀態來改變整個結構和畫面這件事。
不過也因為模組化的結構，所以資料的共享就變成一個很大的重點；同時組件間事件的互相傳遞也會成為一個重點。

## state 跟 props 的差別在哪裡？

State 是自己的資料或狀態， props 是從上層 element 傳下來的資料或狀態。

## 請列出 React 的 lifecycle 以及其代表的意義

有三個 lifecycle 階段。
Mounting：Mounting 是元件被建立時的階段，這裡的 method 會在文件建立時被執行被執行。
Updating：當元件更新使用到的 state 或被傳遞的 props 時，會開始整個 Update 的生命週期。
Unmounting：表示元件移除的時期。
