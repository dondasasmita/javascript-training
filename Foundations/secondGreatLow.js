/*
*  Second Great Low                                                                    *
*  Have the function SecondGreatLow(arr) take the array *
*  of numbers stored in arr and return the second lowest and second greatest numbers,  *
*  respectively, separated by a space. For example: if arr contains                    *
*  [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and     *
*  will contain at least 2 numbers. It can get tricky if there's just two numbers!  
*/

const secondGreatLow = array => {
  // Order array from lowest to biggest
  let arrayInOrder = array.sort((a, b) => {
    return a - b;
  });

  // Variables to store the nums
  let lowestNum = arrayInOrder[0];
  let greatestNum = arrayInOrder[arrayInOrder.length - 1];
  let secondLowestNum = 0;
  let secondGreatestNum = 0;

  // Get the secondLowestNum
  for (let i = 1; i < arrayInOrder.length; i++) {
    if (arrayInOrder[i] > lowestNum && arrayInOrder[i] < arrayInOrder[i + 1]) {
      secondLowestNum = arrayInOrder[i];
      break;
    }
  }
  // Get the secondGreatest
  for (let i = arrayInOrder.length - 1; i > 0; i--) {
    if (
      arrayInOrder[i] < greatestNum &&
      arrayInOrder[i] > arrayInOrder[i - 1]
    ) {
      secondGreatestNum = arrayInOrder[i];
      break;
    }
  }

  // Return statement
  if (secondLowestNum !== 0 && secondGreatestNum !== 0) {
    return `${secondLowestNum} ${secondGreatestNum}`;
  } else {
    return `${lowestNum} ${greatestNum}`;
  }
};

const randomArray = [7, 7, 12, 98, 106];
const randomArray2 = [7, 106];
console.log(secondGreatLow(randomArray));
console.log(secondGreatLow(randomArray2));
