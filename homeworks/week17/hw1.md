## hw1：Event Loop
> 在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
輸出：1，3，5，2，4

邏輯：
call stacks 的東西會先執行，然後才會輪到 callback queue。
|Steps|console|Call stacks|Web API|Callback queue|
|:---:|:---:|:----:|:---:|:---:|
|1||console.log(1) |||
|2|1||setTimeout(){console.log(2)}||
|3||console.log(3)||console.log(2)|
|4|3||setTimeout(()=> console.log(4)},0)|console.log(2)|
|5||console.log(5)||console.log(2) &console.log(4)|
|6|5|||console.log(2) &console.log(4)|
|7|2|||console.log(4)|
|8|4|||
