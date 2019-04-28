function reverse(str) {
  let strArray = [];
  let exchangeTimes = 0;
  let result = '';
  strArray = str.split('');
  let temp;
  const countFromLast = strArray.length - 1;
  exchangeTimes = Math.floor(str.length / 2);
  for (let i = 0; i < exchangeTimes; i += 1) {
    temp = strArray[i];
    strArray[i] = strArray[countFromLast - i];
    strArray[countFromLast - i] = temp;
    result = strArray.join('');
  }
  return result;
}

console.log(reverse('hello'));
