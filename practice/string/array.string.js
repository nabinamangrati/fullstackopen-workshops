// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers) {
  let result = "";

  if (numbers.length === 10) {
    let number = `(${numbers.slice(0, 3)}) ${numbers.slice(
      3,
      6
    )}-${numbers.slice(6)}`;

    let string = String(number);
    for (let i = 0; i < string.length; i++) {
      let element = string[i];
      if (element !== ",") {
        result += element;
      }
    }
  }
  return result;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
