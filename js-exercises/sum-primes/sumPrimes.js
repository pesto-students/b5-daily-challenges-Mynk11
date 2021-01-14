function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) if (n % i == 0) return false;
  return true;
}

function sumPrimes(n) {
  const accumulator = [];
  for (let i = 0; i <= n; i++)
    if (isPrime(i)) {
      accumulator.push(i);
    }

  return accumulator.reduce((total, num) => total + num, 0);
}
export { sumPrimes };
