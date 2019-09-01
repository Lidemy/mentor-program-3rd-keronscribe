## hw4：What is this?

> 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

obj.inner.hello() => obj.inner.hello.call(obj.inner) => console.log(obj.inner.value) => 2
obj2.hello() => obj2.hello.call(obj2) => obj.inner => console.log(obj2.value) => console.log(obj.inner.value) => 2
hello() =>hello.call(undefined) =>console.log(undefined.value) => undefined