## hw2：Event Loop + Scope

> 請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```js
for (var i = 0; i < 5; i++) {
  console.log("i: " + i);
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
```

會輸出

```
i: 0
i: 1
i: 2
i: 3
i: 4
5
5
5
5
5
```

編譯階段：

```js
globalEC:{
  VO:{
    i = undefine,
  }
  scope = [globalEC.VO];
}
```

執行階段：
Event Loop
|i|Call stacks|Web API|Callback queue|console|
|:---:|:---:|:----:|:---:|:---:|:---:|
|`step1` i=0|`step2` ~~console.log('i:'0)~~|`step3` setTimeout()|`step4` `->` `3`|i: 0|
|`step5` i=1|`step6` ~~console.log('i:' 1)~~|`step7` setTimeout()|`step8` `3` `-> 8`|i: 1|
|`step9` i=2|`step10` ~~console.log('i:' 2)~~|`step11` setTimeout()|`step12` `3 8` `-> 11`|i: 2|
|`step12` i=3|`step13` ~~console.log('i:' 3)~~|`step14`|`step 15` `3 8 11` `->14`|i: 3|
|`step16` i=4|`step17` ~~console.log('i:' 4)~~|`step18`|`step19` `3 8 11 14` `->17`|i: 4|
|`step20` i=5|||`8 11 14 17` （`step21` 執行`3`）| 5 |
|5|||`11 14 17`（`step22` 執行`8`）| 5 |
|5|||`14 17`（`step23` 執行`11`）| 5 |
|5|||`17`（`step24` 執行`14`）| 5 |
|5|||（`step25` 執行`17`）| 5 |
