## 請說明 SQL Injection 的攻擊原理以及防範方法

SQL injection 是利用後端會使用來自 client 的資訊放到 SQL 的 query 這件事，將可以改變原有 SQL query 目的的程式碼作為 input 輸入，讓有設計的缺陷的程式碼不照原本設計者的預期動作的一種攻擊。
防範方式就是在取用來自客戶端的 input 時，一律對 input 進行一些處理之後在進行 sql query。php 有一些內建函式和寫法可以做到這件事，像是 prepare statement。

## 請說明 XSS 的攻擊原理以及防範方法

XSS 的英文全名為 Cross Site Scripting，藉由在 input 中或者網址列中輸入腳本，讓程式在遇到這些腳本去執行這些不在於原本設計中的腳本，以使網頁有預期之外的行為發生。這種就是 XSS。要防範這件事情的其中一種辦法，是使用 php 內建函式中的 `htmlspecialchars` 函式，這個函式會阻止瀏覽器執行其中的程式碼，轉而以普通的文字形式呈現。

## 請說明 CSRF 的攻擊原理以及防範方法

CSRF 的英文全名是 Cross Site Request Forgery，跨網域請求偽造，這個東西的攻擊原理是利用瀏覽器只要發送 request 給某個網域，就會把關聯的 cookie 一起帶上去的機制，在網頁中藏一些需要發送 request 取得的內容（像是 image），使使用者在不知情的狀況下也可以偽造出使用者本人發出的 request。

CSRF 的防範方式有很多種，像是加上圖形驗證碼、簡訊驗證碼等等，或是使用檢查 Referer、在 form 裡面加上一 csrftoken 欄位，或者是用 Double Submit Cookie 來進行防禦等等。
