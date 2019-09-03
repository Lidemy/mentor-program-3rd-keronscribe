## hw4：What is this?

> 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value);
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value);
    },
  },
};

const obj2 = obj.inner;
const hello = obj.inner.hello;
obj.inner.hello(); // ??
obj2.hello(); // ??
hello(); // ??
```

1. `obj.inner.hello()` 可以視為 `obj.inner.hello.call(obj.inner)` 這個 this 就會是`obj.inner`
   執行時會執行 `console.log(obj.inner.value)` ，所以是 2。
2. `obj2.hello()` 可以視為 `obj2.hello.call(obj2)` 這個 this 就會是 `obj2`
   執行時會執行 `console.log(obj2.value)` ，而`obj2 = obj.inner` 也就是說 `console.log(obj.inner.value)`，所以是 2。
3. `hello()` 可以視為 `hello.call(undefined)` 這個 this 就會是 `undefine`
   執行時會執行 `console.log(undefined.value)` => 所以是 undefined。
