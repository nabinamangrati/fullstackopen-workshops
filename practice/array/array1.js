// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

let number = function (array) {
  //your awesome code here
  if (array.length === 0) {
    return [];
  }
  let numbering = [];

  for (let i = 0; i < array.length; i++) {
    numbering.push(`${i + 1}: ${array[i]}`);
  }
  return numbering;
};
console.log(number(["a", "b", "c", "h", "jd", "jdjh"]));

// function number(lines) {
//   return lines.map((line, index) => `${index + 1}: ${line}`);
// }
// console.log(number(["a", "b", "c", "h", "jd", "jdjh"]));
