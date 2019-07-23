## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
VARCHAR 可以指定內容長度上限，適合放比較少的文字內容，較省空間和效能。
Text 不能指定內容長度上限，適合存放比較大量的內容。

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？
- Cookie 是儲存在使用者電腦中的瀏覽器的資料片段，被用字串形式儲存。有點像是 PHP 變數，但是有比較長的生存時間。
- 可以把 cookie 放在 header 裡建立 cookie，像是這樣寫：`Set-Cookie: <cookie-name>=<cookie-value>`，
- 在 request 裡把 cookie 放在 header 裡帶去 Server。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
- 在資料庫中儲存的密碼沒有經過加密，這可能會有風險。
- 使用 cookie 傳輸，用 user_id 辨識使用者可能會被人透過刻意更改 cookie 進入別人的個人檔案或者冒名發文。
- 如果使用者關閉了 cookie 功能，我們的功能就失效了。