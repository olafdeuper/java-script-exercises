console.log("Hello World");

const oddNumbers = function (begin, end) {
  let result = "";
  if (begin >= 0 && end >= 0) {
    if (begin >= end) {
      let a = begin;
      begin = end;
      end = a;
    }
    for (let i = begin; i <= end; i++) {
      if (i % 2) {
        result += i + ",";
      }
    }
    result = result.slice(0, -1);
  } else {
    result = "Input numbers should be positiv!";
  }

  return result;
};

// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

const charCount = function (str, char) {
  if (char.length === 1) {
    str = str.toLowerCase();
    char = char.toLowerCase();
    let quantity = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) {
        quantity++;
      }
    }
    console.log(quantity);
  } else {
    console.log("Second Parameter should only consist of one character");
  }
};

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
