## 教你朋友 CLI

### Command Line 是什麼?
我們平時操縱電腦的介面，是一種圖像化的使用者介面，這個介面讓我們的要操作的目標都被圖像化，例如資料夾、控制，列表、縮圖⋯⋯等等，我們可以用游標點擊執行程序。

然而，圖像化的使用者介面算是電腦的發展中相對後期的一種發明，在更早之前，人們都是用一種叫做 `Command Line Interface`，CLI，也就是「命令行介面」進行操作的。這種介面顧名思義就是直接輸入一行一行的文字命令，以要求進行電腦執行程序的一種電腦操縱方式，通常會稱為  `Command Line` 。

即便是在現在的電腦環境裡，我們還是可以使用一個叫做 Terminal （終端機）的東西進行  Command Line 形式的電腦操作。

所以總的來說，你就記得 command line 就是用輸入指令來控制電腦的方式就好了！

### 如何用 CLI 建立一個名為 wifi 的資料夾

在你打開 Terminal 之後，你可以用輸入指令的方式來建立資料夾，這個建立資料夾的指令叫做 `mkdir` ，但是如果只打 `mkdir`，系統是不知道要怎麼面對它，所以不會讓你建立，你得在 `mkdir` 的後面，輸入你想新增的資料夾名字，像是你想要的名稱-- wifi ，用空白鍵隔開，像 `mkdir wifi` 這樣，如此一來電腦就知道你想要建立一個資料夾，它叫做 `wifi` ，然後才會幫你建出來。

這個時候如果你輸入 `ls` ，列出這個資料夾的資料，你會看到剛剛建立的 `wifi`資料夾出現在列表裡面。 

### 如何在 wifi 底下建立一個叫 afu.js 的檔案
現在我們有資料夾了，但你想要在資料夾的裡面建立一個叫 afu.js 的檔案對吧。<br/>所以我們首先，得要先進到 wifi 資料夾裡面，然後才能在那裡新增檔案。這個時候，我們需要用一個可以在資料移夾之間移動的指令，`cd`。 `cd` 是 Change Directory，切換資料夾的簡寫，我們現在要從 `wifi`資料夾所在的位置，進到 `wifi`資料夾裡面，因此我們就輸入 `cd wifi` 和剛剛的 `mkdir wifi` 一樣，後面用空白鍵隔開，然後放資料夾名稱，電腦就會知道你想轉換資料夾的目標是 `wifi`，然後帶你進去。

到了 `wifi` 資料夾裡面之後，我們就可以建立一個檔案，在這裡，我們可以用來用建立檔案的指令是 `touch` ，碰一下。一樣在後面放上我們想要建立的檔案名稱，用空白鍵隔開，像是`touch afu.js` 這樣就建好囉！
