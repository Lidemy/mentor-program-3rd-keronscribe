## 什麼是 DOM？
Document Object Model，文件物件模型。
是一個 browser 解析 HTML 檔案之後生成的樹狀結構模型。其中，每一個 HTML Tags 都會被轉換為 DOM 中的 DOM Node，而使用 HTML5 的 JavaScript APIs 可以對這些 DOM nodes 進行新增、修改或刪除的操作。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
有些 DOM Node 中可以帶有 function，我們會使用 event Listener 來監聽，當使用者進行的操作符合激活這些 function 的 event 時候，這個 event 就會會從 window 一路沿著 DOM 的樹狀結構傳到 function 所在的 DOM node 上，Function 被激活，然後這個激活狀態就會再沿著 DOM 樹狀圖傳回 window。
window 傳遞往目標 DOM node 的這個階段，稱之為捕獲階段，而從目標 DOM node 往上傳回 window 的階段，稱為冒泡階段。

## 什麼是 event delegation，為什麼我們需要它？
event delegation，事件代理，很多時候我們不會對在同一父元素下的每一個子元素都加上 eventListener，而是會選擇把 eventListener 加在父元素上，然後藉由判斷事件目標是哪一個子元素，去執行不同的 function，這種做法，就稱為事件代理。
這種方式可以讓我們需要管理的東西變少，在新增子元素時也會自動加入被代理，十分方便。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault()是把原本 default 的行為完全阻止掉，也就是會導致事件不會被觸發；而 event.stopPropagation() 是阻止事件向上傳遞，比如說如果今天一個子元素的事件被觸發，他的激活狀態在冒泡時會導致他的父元素也被激活，父元素中的事件就會被觸發，此時如果我們使用 event.stopPropagation()，那麼這個觸發狀態就不會被傳遞，父元素和他的上級事件也都不會被觸發。