## 交作業流程

### 交作業守則：
1. 永遠在一條新的 branch 寫作業
2. 確保你在寫作業的時候不在 master 底下

### 流程：
1. 用 `git checkout newbranch` 開一條新的 branch
2. `git checkout newbranch` 切換到 `newbranch` 底下開始寫作業
3. 寫完作業之後，用 `git commit -am "備註"` 提交在電腦裡的 commit 
4. 接著用 `git push origin newbranch` 把 branch push 到 GitHub 上面
5. 再來我們打開自己的 GitHub，會看到系統提示 Your recently branches ，按下右手邊的 `compare & pull request`
6. 輸入標題和心得感想等等，然後按 `create pull request`
7. 到 [第三期交作業專用 repo](https://github.com/Lidemy/homeworks-3rd)裡，點 issue
8. 建立一個 new issue，輸入標題（要遵守命名規範），然後把我們的網址貼上去，然後提交
9. 胡利大大看過如果 OK ，會把東西 merge 進去，然後把 branch 刪掉，issue 關掉
10. 如果不 OK ，他會在 issue 裡面跟我們說，然後會把東西 merge 進去，把 branch 刪掉，就再開一個 branch 修就好。
11. 作業都沒問題之後，在自己的 terminal 裡面用 `checkout master` 回到 `master` 去。
12. 用 `git pull origin master` 把這個 merge 完成的 master 拉下來
13. 用 `git branch -d newbranch` 把為了寫作業新增的 branch 刪掉，交作業完成。
