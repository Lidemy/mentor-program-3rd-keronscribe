function stars(n) {
  let items = '';
  let arr = 0;
  arr = [];
  for (let i = 0; i < n; i += 1) {
    items += '*';
    arr.push(items);
  }
  return arr;
}

console.log(stars(6));


module.exports = stars;
