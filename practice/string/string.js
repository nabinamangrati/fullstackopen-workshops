//Complete the solution so that it returns true if the first argument(string) passed
//in ends with the 2nd argument (also a string).

//Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  // TODO: complete
  let newStr = str.slice(str.length - ending.length, str.length);
  //   console.log(newStr);
  for (let i = 0; i < newStr.length; i++) {
    // let element = newStr[i];
    if (newStr[i] !== ending[i]) {
      return false;
    }
  }

  return true;
}
// console.log(solution("abcde", "cde"));
debugger;
console.log(solution("nabina", "ina"));
console.log(solution(":-)", ":-("));
console.log(solution("tej", "je"));
