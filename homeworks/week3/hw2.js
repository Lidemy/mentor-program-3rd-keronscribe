/*
給定一字串，把小寫字母轉成大寫，大寫字母轉成小寫之後回傳，若不是英文字母則忽略。

input: nick
output: NICK

input: Nick
output: nICK

input: ,hEllO122
output: ,HeLLo123
*/
/*
elist 不給過的碼
function alphaSwap(str) {
  let result = '';
  const strArray = str.split('');
  for (let i = 0; i < str.length; i += 1) {
    ('Z' >= strArray[i]) && (strArray[i] >= 'A') ?
    result += strArray[i].toLowerCase() :
    result += strArray[i].toUpperCase();
  }
  return result;
}
module.exports = alphaSwap;
*/
function alphaSwap(str) {
  let result = '';
  const strArray = str.split('');
  for (let i = 0; i < str.length; i += 1) {
    if ((strArray[i] <= 'Z') && (strArray[i] >= 'A')) {
      result += strArray[i].toLowerCase();
    }result += strArray[i].toUpperCase();
  }
  return result;
}

module.exports = alphaSwap;
