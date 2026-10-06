//* Write a fnc that returns the count of digits in number.

function countDigits(n) {
  if (n == 0) return 1;

  //? (abs) is for converting negative number to positive
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let num = -18;
let result = countDigits(num);
console.log(result);
