## 交作業流程

### 交作業守則：
* 永遠在一條新的 branch 寫作業
* 確保你在寫作業的時候不在 master 底下
  
### 流程：
1. 用 `git branch [新分支]` 開一條新的分支
2. `git checkout [新分支]` 切換到新分支底下開始寫作業
3. 寫完作業之後，用 `git commit -am "備註"` commit 到電腦的 git 裡
4. 用 `git push origin newbranch` 把分支 push 到 GitHub 上面
5. 打開自己的 GitHub，會看到系統提示「你最新的分支」，按下右手邊的 [compare & pull request] 鍵
6. 輸入標題和心得感想等等，然後按 [create pull request]
7. 到 [第三期交作業專用 repo ](https://github.com/Lidemy/homeworks-3rd)裡，點 issue
8. 建立一個新的 issue，輸入標題，然後把我們的網址貼上去，提交
  
胡立大大看過如果 OK ，會把東西 merge 進 master，然後把新分支刪掉，issue 關掉
  
9. 用 `git pull origin master` 把這個 merge 完成的 master 拉下來
10. 用 `git branch -d [新分支]` 把為了寫作業新增的 branch 刪掉，交作業完成。
  
如果不 OK ，胡立大大會在 issue 裡說，然後會把分支 merge 進去，把分支刪掉
  
9. 用 `git pull origin master` 把這個 merge 完成的 master 拉下來
10. 再開一個 branch 修，回到第 1 步 
  
交作業完成。
