console.log("Hello World");

// TODO: Implement the removeItem function
const removeItem = function (arr, num) {
  const arrCopy = structuredClone(arr);
  num--;
  arrCopy.splice(num, 1);
  return arrCopy;
};

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// TODO: Implement the sumOfCharacters function
const sumOfCharacters = function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      result += arr[i].length;
    }
  }
  return result;
};

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
