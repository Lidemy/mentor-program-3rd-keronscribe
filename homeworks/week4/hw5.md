## 請以自己的話解釋 API 是什麼

Application Program Interface，用來和別人的程式進行互動的介面（規範）。
別人的程式（在這裡是在網路上被使用的程式）會有自己的許多運算和功能，因此會有一些它們搜集來、或者是生成出來的資料。
提供 API 的感覺就像是告訴別人我們是一家有著哪些菜單的廚房，如果你們照著我們提供的 API 文件上的規定格式來點單，我們就可以把這些菜做出來給你們。

至於過來餐桌邊問你要送什麼菜單的服務生，我覺得是 node.js 的 request function，或者是 curl ，得要透過這些知道怎麼去廚房去的人來把我的 order 帶到廚房去。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
|status code|名字|介紹|
|:---:|:---|:---|
|201|Created|請求成功且新的資源成功被創建，通常用於 POST 或一些 PUT 請求後的回應。|
|505|HTTP Version Not Supported|伺服器不支援，或者拒絕支援在請求中使用的HTTP版本。這暗示著伺服器不能或不願使用與用戶端相同的版本。|
|418|I'm a teapot|用戶端錯誤碼表明了伺服器是個茶壺，所以拒絕煮咖啡。|
 
- 418 這個錯誤碼是源自於 1998 的愚人節玩笑「超文字咖啡壺控制協定」（Hyper Text Coffee Pot Control Protocol）。如果要求前往 google 的 [teapot 頁面](https://www.google.com/teapot)會有這種 status

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: `https://Cian-restaurants-platform.com`（平台根目錄網址)

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 回傳餐廳資料 | GET    | /restaurants    | _limit:回傳餐廳數           | /restaurants?_limit=5 |
| 獲取單一餐廳 | GET    | /restaurants/:id | 無                    | /restaurants/10      |
| 新增餐廳   | POST   | /restaurants     | name: 餐廳名 | 無              |
| 刪除餐廳   | DELETE   | /restaurants/:id     | 無 | 無              |
| 更改餐廳資訊   | PATCH   | /restaurants/:id     | name: 餐廳名 | 無              |
