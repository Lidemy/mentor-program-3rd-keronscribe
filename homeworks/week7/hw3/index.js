let moniter = '';
let numberHolder = '';
let result = '';
let plus = false;
let minus = false;
function adder(a, b) {
  const num1 = parseInt(a, 10);
  const num2 = parseInt(b, 10);
  let added = (num1 + num2);
  added += '';
  return added;
}

function minusing(a, b) {
  const num1 = parseInt(a, 10);
  const num2 = parseInt(b, 10);
  let minuses = (num1 - num2);
  minuses += '';
  return minuses;
}

document.querySelector('.btn__area').addEventListener('click', (e) => {
  if (e.target.classList.contains('num')) {
    moniter += (e.target.value);
    document.querySelector('.monitor__number').innerHTML = moniter;
  } else if (e.target.classList.contains('plus')) {
    numberHolder = moniter;
    moniter = '';
    plus = true;
    minus = false;
    document.querySelector('.monitor__number').innerHTML = numberHolder;
  } else if (e.target.classList.contains('minus')) {
    numberHolder = moniter;
    moniter = '';
    plus = false;
    minus = true;
    document.querySelector('.monitor__number').innerHTML = numberHolder;
  } else if (e.target.classList.contains('btn__equal')) {
    if (plus) {
      result = adder(numberHolder, moniter);
      moniter = '';
      numberHolder = '';
      document.querySelector('.monitor__number').innerHTML = result;
    } else if (minus) {
      result = minusing(numberHolder, moniter);
      moniter = '';
      numberHolder = '';
      document.querySelector('.monitor__number').innerHTML = result;
    } else {
      document.querySelector('.monitor__number').innerHTML = numberHolder;
    }
  } else if (e.target.classList.contains('clear')) {
    moniter = '';
    numberHolder = '';
    result = '';
    document.querySelector('.monitor__number').innerHTML = moniter;
  }
});
