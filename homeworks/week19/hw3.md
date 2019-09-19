## 請簡單解釋什麼是 Single Page Application

SPA （Single Page Application）就是利用 Ajax，在頁面上進行任何操作的時候都不換頁的一種網頁用程式。
像是 Gmail 或者是 youtube 就是 Single Page Application 的實踐，這樣的網頁會讓使用者有更好的體驗。
相對於 SPA 的 概念是 MPA（Mutiple Page Application），就是使用者在操作時會出現換頁，這會造成操作之後畫面在等待 response 時出現白畫面，感覺比較不流暢。

## SPA 的優缺點為何

優點：
原本的活動可以不被中斷
像是使用 Youtube 時如果想瀏覽平台上其他影片，就可以用縮小畫面功能一邊繼續影片，一邊進行新的操作。
缺點：
對像是搜尋引擎或一些網頁爬蟲來說，他們看到的網頁資料可能是尚未用 JavaScript 取得新資料的版本，也就是說，他們可能會爬不到你希望他們知道的資料。
另外因為在實踐 SPA 時，後端傳回來的都是同一份檔案，必須由前端去控制到底現在是要進行哪一個操作，前端會變得十分複雜。
