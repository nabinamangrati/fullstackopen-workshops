function sortedArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        // Swap elements if the current element is smaller than the compared element
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

const array = [5, 4, 3, 2, 1];
console.log(sortedArray(array)); // Output: [1, 2, 3, 4, 5]
