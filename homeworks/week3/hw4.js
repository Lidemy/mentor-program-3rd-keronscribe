/*
hw4：判斷迴文
給定一個長度小於 100 的字串 s，請回傳 s 是否為迴文（迴文的定義：正著唸倒著念都一樣）

abcba => true
apple => false
aaaaa => true
applppa => true
*/

function isPalindromes(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    const partnerIndex = (str.length - i - 1);
    if (str[i] !== str[partnerIndex]) {
      return false;
    }
  } return true;
}
// console.log(isPalindromes('abcba'));
// console.log(isPalindromes('apple'));
module.exports = isPalindromes;
