//Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function stringCheck(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(stringCheck("jhkaghhqalioqielEJGFHILOAhvr urevhb"));
