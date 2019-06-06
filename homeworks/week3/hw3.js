/*
hw3：判斷質數
給定一個數字 n（1<=n<=100000），請回傳 n 是否為質數（質數的定義：除了 1 以外，所有小於他的數都無法整除）

n = 2 => true
n = 3 => true
n = 10 => false
n = 37 => true
n = 38 => false
*/

function isPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  } return true;
}

module.exports = isPrime;
