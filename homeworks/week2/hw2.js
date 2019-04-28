let code = 0;
let strArray = [];
function capitalize(str) {
  let result = '';
  code = str.charCodeAt(0);
  if (code >= 91 && code <= 122) {
    strArray = str.split('');
    strArray[0] = strArray[0].toUpperCase();
    result = strArray.join('');
  }

  if (code < 91 || code > 122) {
    result = str;
  }
  return result;
}


console.log(capitalize('hello'));
