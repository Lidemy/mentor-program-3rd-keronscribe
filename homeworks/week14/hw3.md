## 什麼是 DNS？Google 有提供的公開的 DNS，對 Google 的好處以及對一般大眾的好處是什麼？
DNS 的全名為 Domain Name System，有點像是網路版的電話簿，透過 DNS server，我們可以知道 domain 對應的 ip 位址，然後從這個 ip 位址連上網站。
Google 提供的公開的 DNS 首先可以知道哪些網站常常有人去，可以提供他們搜尋引擎的優化。
而對一般大眾來說，Google 提供的 DNS 因為有快取(Caching)機制，所以你是不用等待DNS查詢的時間因此第一個好處就是快速。第二個好處是安全性Security：由於 Google Public DNS 的控管比起一般 ISP 的嚴格許多，這樣子就可以減少 DNS 被動手腳（DNS Injection）的機會。
參考資料：
[高登工作室--Google Public DNS 服務](https://gordon168.tw/google-public-dns/)

## 什麼是資料庫的 lock？為什麼我們需要 lock？
當資料庫同時收到多個 query 時，有可能會發生 server 同時執行 query 而導致結果異常（如超賣）的狀況。此時我們需要用一些機制來限制 server 一個 query 做完再進行下一個，這種機制就是資料庫的 lock。

## NoSQL 跟 SQL 的差別在哪裡？
NoSQL 的全名是 Not Only SQL， 他是一種資料庫形式，通常以 key-value 來儲存結構不固定的資料（如 log），不支援 JOIN query，MongoDB 是這種資料庫的一個著名例子。SQL 通常為關聯式資料庫（Relational Database Management System，RDBMS）的代稱，通常用來儲存有固定結構的內容，會將不同主題的內容存在不同的表（table）中，並以一些欄位互相關聯，比較有名的例子如 phpmyadmin。
參考資料：
[AWS 對 NoSQL 的解釋](https://aws.amazon.com/tw/nosql/)
[SQL wiki](https://zh.wikipedia.org/wiki/SQL)
[關聯式資料庫 wiki](https://zh.wikipedia.org/wiki/%E9%97%9C%E8%81%AF%E5%BC%8F%E8%B3%87%E6%96%99%E5%BA%AB%E7%AE%A1%E7%90%86%E7%B3%BB%E7%B5%B1)

## 資料庫的 ACID 是什麼？
在資料庫中，有一種 query 的形式稱為「Transaction（交易）」，為了保證 Transaction 的正確性，一個 Transaction 需符合以下四種特性：
1. 原子性 atomicity：又稱不可分割性，要嘛全部失敗，要嘛全部成功
2. 一致性 consistency：維持資料的一致性（錢的總數相同）
3. 隔離性 isolation：多筆交易不會互相影響（不能同時改同一個值）
4. 持久性 durability：交易成功之後，寫入的資料不會不見
