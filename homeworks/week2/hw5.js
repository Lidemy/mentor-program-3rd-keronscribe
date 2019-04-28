function join(arr, concatStr) {
  let i = 0;
  let result = '';
  while (i < arr.length) {
    if (i !== arr.length - 1) {
      result += arr[i] + concatStr;
    } else if (i === arr.length - 1) {
      result += arr[i];
    }
    i += 1;
  }
  return result;
}

function repeat(str, times) {
  let i = 0;
  let string = '';
  while (i < times) {
    string += str;
    i += 1;
  }
  return string;
}

console.log(join([1, 2, 3], '!'));
console.log(repeat('a', 5));
