Base URL：https://keronscribe.tw/mtr-todos/todos.php

| 說明           | Method | path       | 參數                                              | 範例                     |
| -------------- | ------ | ---------- | ------------------------------------------------- | ------------------------ |
| 獲取所有 todos | GET    | /todos.php |                                                   |                          |
| 獲取單一 todo  | GET    | /todos.php | id:想取得的 todo id                               | /todos.php?id=2          |
| 刪除單一 todo  | DELETE | /todos.php | deleteId:想刪除的 todo id                         | /todos.php?deleteId=1    |
| 新增 todo      | POST   | /todos.php | newTodo: 內容                                     | 無                       |
| 修改 todo      | PATCH  | /todos     | updateId: 要修改的 id ； done: 完成狀態（0 或 1） | /todos?updateId=5&done=0 |
