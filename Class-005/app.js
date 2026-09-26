//* Second Largest number

// let arr = [4, 9, 0, 2, 8, 9, 7, 1];

// function secondLargestNumber(arr) {
//   if (arr.length < 2) return "Array length should be more than 2";
//   let firstNumber = -Infinity;
//   let secondNumber = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstNumber) {
//       secondNumber = firstNumber;
//       firstNumber = arr[i];
//     } else if (arr[i] > secondNumber && arr[i] != firstNumber)
//       secondNumber = arr[i];
//   }
//   return secondNumber;
// }

// let res = secondLargestNumber(arr);
// console.log(res);
