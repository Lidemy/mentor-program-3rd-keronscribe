資料庫名稱：users

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|user_id|int(11)|會員編號|
|username|varchar(11)|會員帳號|
|password|varchar(11)|會員密碼|
|nickname|varchar(64)|會員暱稱|

資料庫名稱：comments

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|comment_id|int(11)|留言編號|
|user_id|varchar(20)|留言者會員編號|
|created_at|datetime|留言時間|
|content|text|留言內容|