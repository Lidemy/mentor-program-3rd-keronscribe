## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
|Tag|說明|
|:---:|:----|
|`<blockquote>`|引文，是一個區塊元件，會導致換行|
|`<em>`|強調|
|`<audio>`|聲音|


## 請問什麼是盒模型（box modal）

所有的 HTML elements 在用 CSS 在用 CSS 進行排版時，都被視為一個個有 margin、border、padding以及 content 的盒狀構造，稱之為盒模型。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
- inline 指的是把 inline element （行內元件）排在同一行
- block 指的是將目標視為一個 block，會自動換行
- inline-block 是把原本會自動換行的 block 元件，排在同一行中，不執行換行

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
- position: static 是靜態位置，也是瀏覽器的預設排版方式
一般所有的網頁預設都會是這種。
- position: relative 是相對位置，相對瀏覽器的預設排版方式所排的位置進行偏移。
一種很常見的用法是把區塊設成 relative ，讓他可以成為 absolute 的定位基準。
- position: absolute 絕對位置，會往上找到第一個非 static 類型的父元件進行相對位置的定位。
像是一些選單按鈕會做成一個 absolute 的區塊，使其固定在某個 relative 的 特定位置上。
- position: fixed 對這個 block 在 viewport 中的位置進行定位。
像是那些不管頁面怎麼滑都不會動的廣告。