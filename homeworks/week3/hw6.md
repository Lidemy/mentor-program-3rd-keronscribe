## hw1：好多星星

描述：  
給定 n（1<=n<=30），依照規律「回傳」正確圖形（每一行是一個陣列的元素）
  
```
n = 1
["*"]

n = 3
["*", "**", "***"]

n = 6
["*", "**", "***", "****", "*****", "******"]
```
  
### 我的解答：
```javascript=
function stars(n) {
  let items = '';
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    items += '*';
    arr.push(items);
  }
  return arr;
}
```

### 我的筆記：
5/27,剛解完題目
要注意 `arr` 沒有被重新賦值的變數要用 const，不然會被 eslint 糾正。

### 解題關鍵字：
`arr` `arr.push` `for loop` 
***
## hw2: 大小寫互換

描述：  
給定一字串，把小寫字母轉成大寫，大寫字母轉成小寫之後回傳，若不是英文字母則忽略。

```
input: nick
output: NICK

input: Nick
output: nICK

input: ,hEllO122
output: ,HeLLo123
```

### 我的解答一：
```javascript=
function alphaSwap(str) {
  let result = "";
  let strArray = str.split("");
    for (i = 0; i < str.length; i += 1)	{
      if(("Z" >= strArray[i]) && (strArray[i] >= "A")){
    result += strArray[i].toLowerCase();
  } else {
        result += strArray[i].toUpperCase();
    }
  }
  return result;
}

module.exports = alphaSwap;

```

### 我的解答二：用三元運算子改寫（commit 的時候被拒絕了，ＱＱ）
```javascript=
function alphaSwap(str) {
  let result = "";
  let strArray = str.split("");
    for (i = 0; i < str.length; i += 1)	{
      ("Z" >= strArray[i]) && (strArray[i] >= "A")? result += strArray[i].toLowerCase() : result += strArray[i].toUpperCase();
  }
  return result;
}

module.exports = alphaSwap;
```

### 我的心得：
跑 lidemy OJ 的時候要記得把 `module.exports` 拉掉才會過。
然後試著用三元運算子改寫，覺得試了一個新東西很開心。
然後條件式用了之前有點混亂的邏輯運算子，一次就成功也很開心（明明沒有難度ＸＤ）
覺得對 JavaScript 越來越熟練了很愉悅～

### 解題關鍵字：
`arr` `str.split()` `for loop` `.toLowerCase()` `.toUpperCase`
***
## hw3：判斷質數

描述：  
給定一個數字 n（1<=n<=100000），請回傳 n 是否為質數（質數的定義：除了 1 以外，所有小於他的數都無法整除）

```
n = 2 => true
n = 3 => true
n = 10 => false
n = 37 => true
n = 38 => false
```

### 我的解答：
```javascript=
function isPrime(n) {
  if (n === 1){
    return false;
  } else {
    for (i = 2; i < n; i += 1) {
  	  if (n % i === 0){
  	  return false;
  	  }
    }
  } return true;
}
```

### 我的心得：
在某一次輸入數值的時候我不小心輸成字串，然後發現這樣就會變成一個 bug，於是我就寫出了下面的程式碼：
```javascript=
function isPrime(input) {
  let n = Number(input);
  if (n === NaN){
    return false;
  }else if (n === 1){
    return false;
  }else {
    for(i = 2; i < n; i += 1){
      if (n % i === 0){
      return false;
      }
    }
  }return true;
}
```
不幸的是這個 function 是不正確的，因為
```javascript=3
  if (n === NaN){ 
  	return false;
    //這裡永遠都是 false 因為 NaN 永遠不會跟別人相等。
```
但我現在腦中還沒有其他解法，所以先擱置。

### 解題關鍵字：
`Number()` `NaN` 
***
## hw4：判斷迴文
描述：
給定一個長度小於 100 的字串 s，請回傳 s 是否為迴文（迴文的定義：正著唸倒著念都一樣）

```
abcba => true
apple => false
aaaaa => true
applppa => true
```

### 我的答案：

```javascript=
function isPalindromes(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    const partnerIndex = (str.length - i - 1);
    if (str[i] !== str[partnerIndex]) {
      return false;
    }
  } return true;
}

module.exports = isPalindromes; // 輸出模組給測試用

```

### 心得：
這個沒有很難，但是在解的時候我原本不想要另外做一個變數接，但 `str[]` 裡面似乎不吃這一套，所以就還是設了一個變數，不知道是不是我有哪裡疏漏了。


## hw5：大數加法
給定兩個長度為 l(1<=l<=1000)的數字（但型態為字串），請回傳兩個數字相加後的結果。

提示：
這題不是要考你型態轉換，而且這題很難，真的很難
小時候怎麼做直式加法，這一題就怎麼做，可以拿紙跟筆試試看

```
"123"+"456" => "579"
"12312383813881381381"+"129018313819319831" => "12441402127700701212"
```

### 我的解答
```javascript=
function add(a, b) {
  const A = a.split('').reverse();
  const B = b.split('').reverse();
  const result = [];
  let c = 0;
  if (A.length >= B.length) {
    for (let i = 0; i < A.length - (A.length - B.length); i += 1) {
      if ((Number(A[i]) + Number(B[i]) + c) >= 10) {
        result.push((Number(A[i]) + Number(B[i])) + c - 10);
        c = 1;
      } else {
        result.push((Number(A[i]) + Number(B[i])) + c);
        c = 0;
      }
    }

    for (let i = A.length - (A.length - B.length); i < A.length; i += 1) {
      if ((Number(A[i]) + Number(B[i]) + c) >= 10) {
        result.push((Number(A[i]) + c) - 10);
        c = 1;
      } else {
        result.push(Number(A[i]) + c);
        c = 0;
      }
    }
  } return result.reverse().join('');
}

module.exports = add;
```

### 心得
寫之前腦中就大致有一個流程了，但寫下去還是各種細節一直跑出來。像是如果不等長，或是這樣用真的可以嗎。所以有時候會再寫成程式碼之前先用 `console.log()` 印一下出來的東西是不是我要的在寫進去。但一開始沒有這麼嚴謹，寫了很長一部分之後一跑是錯的，就花了不少時間找問題。
不過是滿好玩的一個題目～～

### 解題關鍵字：
`全加器` `Number()` `.reverse()` `.join()` `.split()` `.push()` 

## 總結：
我的 hw1 和 hw5 寫的時間相差非常遠，回過頭來重看自己的 code 有深刻的感受自己對於 JS 語法熟悉度的提升，也對自己以後會成長成可以熟悉使用 JS 的人這件事感覺更有信心了，滿開心的。
話說每一次聽到胡立大大在講總結的時候都會有種一直以來非常在意的部分被填補了的感覺，像是我一直很在意到底為什麼這個課不是先上 HTML 和 CSS，或者為什麼會常常有跳出去做別的事情（像是查資料）之類的這種事，然後再看結論影片的時候都覺得自己有被說服，下一課可能要先從結論開始看（笑）。
不過也因為這樣，我現在覺得自己很有「要成為工程師要懂很多」的意識，搞不好還有點預期要懂太多。比起覺得這是件簡單的事，這是件有挑戰性但是做得到的事顯得更迷人就是了。