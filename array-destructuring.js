// Array Destructuring

// 1. Mengambil value array tanpa harus memakai dan mengulang index array
let fruits = ['mangga', 'jeruk', 'pepaya', 'jambu', 'pisang'];

let [firstIndex, secondIndex, thirdIndex, fourthIndex, fifthIndex] = fruits;

console.log(firstIndex);
console.log(secondIndex);
console.log(thirdIndex);
console.log(fourthIndex);
console.log(fifthIndex);

// 2. Menskip elemen yang tidak ingin diambil
let fruits2 = ['mangga', 'jeruk', 'pepaya', 'jambu', 'pisang'];

let [firstIndex2, , , fourthIndex2, fifthIndex2] = fruits2;

console.log(firstIndex2);
console.log(fourthIndex2);
console.log(fifthIndex2);

// 3. Swap nilai dari variabel
let a = 1;
let b = 2;

console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

// 4. Mengatur default value
let numbers = [3, 5, 6, 2];

let [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber = 7] =
  numbers;

console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);
console.log(fourthNumber);
console.log(fifthNumberNumber);

// 5. Mengambil return value dari sebuah function
function addAndSubtract() {
  let add = 1 + 3;
  let substract = 2 - 3;
  return [add, substract];
}

const [addResult, subtractResult] = addAndSubtract();

console.log(addResult);
console.log(subtractResult);
