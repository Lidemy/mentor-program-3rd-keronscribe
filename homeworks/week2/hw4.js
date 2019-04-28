function printFactor(n) {
  let factors = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      factors = i;
      console.log(factors);
    }
  }
  return n;
}

printFactor(7);
