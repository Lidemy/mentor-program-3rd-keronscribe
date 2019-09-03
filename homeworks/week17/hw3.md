## hw3：Hoisting

> 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```js=
var a = 1;
function fn() {
  console.log(a);
  var a = 5;
  console.log(a);
  a++;
  var a;
  fn2();
  console.log(a);
  function fn2() {
    console.log(a);
    a = 20;
    b = 100;
  }
}
fn();
console.log(a);
a = 10;
console.log(a);
console.log(b);
```

:inbox_tray: 首先建立一個 `globalEC.VO`  把所有宣告進去

```javascript
globalEC.VO {
  a : undefined,
  fn: fn 的記憶體位置,
} scope = [globalEC.VO]
```

:arrow_forward: 執行 `a = 1`

```javascript
globalEC.VO {
  a : 1, //這裡的值改為 1
  fn: fn 的記憶體位置,
} scope = [globalEC.VO]
```

:arrow_forward: line 16，發現是函式 `fn`，先進行編譯
:inbox_tray:建立 `fnEC.AO`

```javascript
fnEC.AO {
 a : undefined,
 fn2 : fn2 的記憶體位置,
} scope = [fnEC.AO, globalEC.VO]
```

:arrow_forward:執行 line 3 `console.log(a)`，此時 `fnEC.AO` 中的 `a` 為 `undefined`，所以會 log 出 `undefined`。

```=
undefined
```

:arrow_forward: 執行 line 4 `var a = 5`

```javascript
fnEC.AO {
 a : 5, // 把這個 a 的值改為5
 fn2 : fn2 的記憶體位置,
} scope = [fnEC.AO, globalEC.VO]
```

:arrow_forward: 執行 line 5 `console.log(a)`此時 `fnEC.AO` 中的 `a` 為 `5`，所以會 log 出 `5`。

```=
undefined
5
```

:arrow_forward: 執行 line 6 `a++`

```javascript
fnEC.AO {
 a : 6, // 把這個 a 的值從 5 加上 1 成為 6
 fn2 : fn2 的記憶體位置,
} scope = [fnEC.AO, globalEC.VO]
```

:inbox_tray: 遇到 fn2()，但發現編譯階段沒有任何變數，所以只指定 scope

```
scope = [fn2EC.AO, fnEC.AO, globalEC.VO]
```

接著進入執行階段，
:arrow_forward: 執行 line 11。首先 `console.log(a)`，因為 `fn2EC.AO` 中，並沒有 `a` 這個變數，所以往上一層找 `fnEC.AO`，找到 `a` 的值為 `6`

```=
undefined
5
6
```

:arrow_forward: 執行 line 12，賦值 `a = 20`，一樣因為`fn2EC.AO` 中，並沒有 `a` 這個變數，所以往上一層找 `fnEC.AO`，找到 `a` ，並賦值為 `20`

```javascript
fnEC.AO {
 a : 20, // 把這個 a 的值重新賦值為 20
 fn2 : fn2 的記憶體位置,
} scope = [fnEC.AO, globalEC.VO]
```

:arrow_forward: 執行 line 13，賦值 `b = 100`，一樣因為`fn2EC.AO` 中找不到，往上一層找 `fnEC.AO` 也沒有，再往上一層`globalEC.VO` 也沒有，認為是一個新的變數，於是新增這個變數在`globalEC.VO` 並賦值 `100`

```javascript
globalEC.VO {
  a : 1,
  fn: fn 的記憶體位置,
  b : 100, // 建立新變數，並賦值為 100
} scope = [globalEC.VO]
```

`fn2` 執行完畢，資料 pop 掉。
:arrow_forward: 回到 fnEC，接著執行 line 9 。`console.log(a)`，在 `fnEC.AO` 中找到 `a` 值為 `20`

```=
undefined
5
6
20
```

`fu` 執行完畢， pop 掉，回到 globalEC。
:arrow_forward: 執行 line 17 `console.log(a)`
此時在 `globalEC.VO` 中，`a` 的值為 `1`，因此印出`1`

```=
undefined
5
6
20
1
```

:arrow_forward: 執行 line18 `a = 10`

```javascript
globalEC.VO {
  a : 10, // 賦值 a = 10
  fn: fn 的記憶體位置,
  b : 100,
} scope = [globalEC.VO]
```

:arrow_forward: 執行 line19 `console.log(a)`，`a` 的值為 `globalEC.VO` 中的 `a:10`，印出 `10`

```=
undefined
5
6
20
1
10
```

:arrow_forward: 執行 line20 `console.log(b)`，`b` 的值為 `globalEC.VO` 中的 `b:100`，印出 `100`

整體結果：

```=
undefined
5
6
20
1
10
100
```
