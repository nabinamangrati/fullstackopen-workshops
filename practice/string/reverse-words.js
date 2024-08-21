//Write a function that takes in a string of one or more words, and returns the same string,
// but with all words that have five or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more
// than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

function spinWords(string) {
  let arrayWords = string.split(" ");
  // console.log(arrayWords);
  let val = [];
  for (let i = 0; i < arrayWords.length; i++) {
    let element = arrayWords[i];

    // console.log(element);
    if (element.length >= 5) {
      let reverse = "";
      for (let j = element.length - 1; 0 <= j; j--) {
        let otherElement = element[j];
        reverse += otherElement;

        // console.log(reverse);
        // console.log(otherElement);
      }
      val.push(reverse);
    } else {
      val.push(element);
    }
  }
  console.log(val);
  return val.join(" ");
}
console.log(spinWords("Hey fellow warriors"));
