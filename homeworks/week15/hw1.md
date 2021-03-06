# 第三次心得

## 我的學習狀況

整體來說，第二次回顧和現在這一次回顧的學習流管理系統並沒有什麼變化，一樣是每週把當週要做的事情放進 instagantt，紀錄學習時間和學習狀況。影片也盡量以索引目錄的形式作筆記。

比較大的轉變應該是偏重個人學習（如閱讀）逐漸轉向課程內容學習。這部分我認為是作業本身和課程的距離變小，完成作業所需的額外知識沒有以前多，且課程內容轉向更多概念（如物件導向、資訊安全，以及後端基礎概念）為主要原因。

這週還引入了另一個解題流程筆記這個做法，用記錄自己解題的想法和原因，然後使用這個方法的成效來減緩問題沒解開時的焦慮感。整體來說學習過程趨向穩定成長。

以下以時間軸模式紀錄。

第十一週
729 - 8/4 是後端基礎。這一個部分主要在學習的是關於各種駭客攻擊，因為我的留言板做出來當天就直接被男朋友駭進去加了 alert Hello 功能，所以學的特別起勁。
這週搭配了日本的 [paiza](https://paiza.jp/works/mypage) 這個網站所提供的限時免費~~中二~~課程一起學習。
作業的部分這週是把留言板的各種輸入換成比較安全的 prepare statement。

第十二週
8/5 - 8/9 這一週繼續學習網路安全和資訊安全，然後還有需要學習 class、繼承， 又進一步學了一下物件導向。然後這週還讓留言板加上了可以有子留言的功能，資料庫的結構和後端用 php 撈資料的方式都需要做改動，大部分的時間都在做這件事。然後我的《深入淺出 PHP》大概到這週瀏覽完。但沒有特別記的結果就是現在好像差不多忘光了。

第十三週
8/9 - 8/15
這週主要學習使用 jquery 和 boostrap，也就是 library 的應用。 我在這裡搭配使用了《深入淺出 jquery》這本書，但是用來做動畫特效的部分大部分都跳過了。
所以這週也是花大部分時間在做作業，包括重新結構我的整座留言板、把新增留言和刪除留言改成使用 JQuery 來做，以及試著套用 boostrap 這個 UI 函式庫。

第十四週
8/16 - 8/20
這週主要的工作在部署，我選的是 AWS 這個常常聽到，感覺很厲害的東西。隨著前人的步伐順順的解完了，只有因為安全性設得太嚴密我有兩天進不去自己的後台，其他都運作的挺好的。另外這週 Huli 大大還提到了一些後端基礎， 像是 IP 啊、 load balance 之類的東西。但因為我目前覺得那部分目前學習成本太高，運用效率太低，所以也就沒有特別鑽研，只是基礎看過去，附的文件之類的看一看而已。

## 對於課程的想法

不知道哪一週開始，計畫的影片就比較少是幾個主題一支影片的課程，許多部分是看上一期，甚至是上上期的直播。
這樣的做法對我來說就是對於通盤理解的協助感覺比較少，在幾個主題有一部影片的課程中，大概就會有一些十分明確的關鍵字，順著關鍵字摸下去，就可能找到更大的圖。
然而第十一到十四週的影片因為本身的主題比較零散，加上各個點的連接對初心者來說並不明確，導致其實比較難為課程和自學間找到連接的橋梁。尤其對我來說最大的障礙是，常常直接從名詞解釋開始，比如說劈頭就說「view 是什麼？view 就只是一張 table」這樣，但我其實不知道「哪裡來的 view？」「用在哪？」。因為缺乏這種前知識，雖然在接下來的影片立刻就有講解，但是前段的說明的功效感覺就比較差。

這兩次複習週之間的內容確實也是實作遠大於概念的幾週，尤其因為不是手把手的實作，完成作業時時會遇到無數多的細節需要處理，然後每一個人會遇到的問題也十分多元，所以我一方面覺得這是線上課程才會有的問題，一方面也覺得這樣的問題出現挺好的。
在一些手把手的課程，在那些課程裡面，基本上只要跟著老師做，所有困難都會被完美的迴避掉了，所以反倒是很難遇上這些小眉角。所以比較之下，讓學生掙扎一下，但是又知道怎麼求救的做法是一件好事。

## 社群

- 我幾乎天天都會去小樹屋，有一些進度我前面的同學，甚至是上一期的學長也會來，在聊天的時候有時會得到一些幫助。小一點的是我自己解題或 debug 時的盲點，解決的關鍵字，大一點的就是他們在面對問題的態度，整個前端技術的架構和關聯性等等。覺得受益匪淺。
- 動態時報上面會看到同學的心路歷程，有時候別人看起來行雲流水，但交流之後發現過程也一樣不簡單。
- 然後有趣的是大家也沒有在裝厲害，只是人會傾向看到別人厲害的地方，我覺得沒有不好，但是有機會的話多交流，看看別人真的是怎麼努力的，在自己深陷泥淖時也會有很大的鼓舞。

## 時間管理

我在這幾週的學習主要以「作業寫的出來就進下一週」的方式，努力讓自己不拘泥任何好像可以更好的東西。原因是我想要練習在限定的時間範圍之內，如何篩選出自己最需要著墨的部分、然後完成最需要完成的功能這件事情。優化當然是件好事，但是這比較像是如果相信老師給的時間表，甚至如果真的出去工作，需要在一定的時間內完成被賦予的任務時，我有沒有辦法找出最重要的點擊破它，而不被自己的完美主義限制的練習。
講得厲害一點也許就是依循 80/20 法則來完成進度，就目前的效果來說我挺滿意的。
