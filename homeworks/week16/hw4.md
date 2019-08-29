## CSS 預處理器是什麼？我們可以不用它嗎？

CSS 預處理器就是一個可以簡化開發工作的工具，在 CSS 預處理器上面用比較簡單的語法寫好後，預處理器會自動幫你把內容轉換為相應的 CSS 語法。基本上是可以完全不用預處理器的，但是如果用了會可以方便非常多。

## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。

Cache-Control，這是一個可以用來做出很多設定或控制 cache 的 header，像是 `Cache-Control:max-age=100` 就表示這個 cache 會在 100 秒之後過期，也可以指定 `Cache-Control:No-Cache`來強制瀏覽器必須重新發一個 request 上去拿到新的內容才能 cache ，而 `Cache-Control:No-Store` 則是禁止使用 cache。另外還有`Cache-Control: Private` 和 `Cache-Control: Public` 規定存取條件等等。

## Stack 跟 Queue 的差別是什麼？

執行的順序，Stack 這個資料結構會讓先進的後出，Queue 則是反過來，後進的先出。

## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）

CSS Selector 的權重首先有基本上有三個 level，我們用由大到小 0 - 0 - 0 代表各代表每一個級別的積分。
|Selector|Points|說明|
|:-----:|:--------:|:--------|
|`*`|0 - 0 - 0|`*` = 0 point|
|`div`|0 - 0 - 1|1 element = 0 - 0 - 1|
|`div > li`|0 - 0 - 2|1 element = 0 - 0 - 1|
|`.className`|0 - 1 - 0|1 classname = 0 - 1 - 0|
|`li.className`|0 - 1 - 1|1 classname = 0 - 1 - 0|
|`[type=check]`|0 - 1 - 0|1 attribute = 0 - 1 - 0|
|`:before`|0 - 1 - 0|1 pseudo-class = 0 - 1 - 0|
|`#id`|1 - 0 - 0|1 ID = 1 - 0 - 0|

但是在這三個 0 - 0 - 0 層級之外，還有兩層像是小魔王和大魔王

|   Selector   |      Points       | 說明         |
| :----------: | :---------------: | :----------- |
| `<style="">` |   1 - 0 - 0 - 0   | inline style |
| `!important` | 1 - 0 - 0 - 0 - 0 | !important   |

一比輸就不會往下比了，所以權重最重的是 `!important`，最輕的是`*`。另外，當同分狀況出現時，在 CSS 下方的東西會覆蓋上方的東西。
