function squareDigits(num) {
  let numbers = String(num);
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    let squared = element * element;
    result += squared;
  }
  return Number(result);
}
console.log(squareDigits(2112));
