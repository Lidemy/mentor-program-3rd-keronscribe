/*
hw5：大數加法
給定兩個長度為 l(1<=l<=1000)的數字（但型態為字串），請回傳兩個數字相加後的結果。

提示：

1. 這題不是要考你型態轉換，而且這題很難，真的很難
2. 小時候怎麼做直式加法，這一題就怎麼做，可以拿紙跟筆試試看

```
"123"+"456" => "579"
"12312383813881381381"+"129018313819319831" => "12441402127700701212"
```
*/

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

// module.exports = add;

console.log(add('555', '666'));
