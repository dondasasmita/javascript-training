/*
Array Addition I                                                                    *
*  Using the JavaScript language, have the function ArrayAdditionI(arr) take the array *
*  of numbers stored in arr and return the string true if any combination of numbers   *
*  in the array can be added up to equal the largest number in the array, otherwise    *
*  return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the      *
*  output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, *
*  will not contain all the same elements, and may contain negative numbers.    
*/

const arrayAdditionI = array => {
  let biggestNumber = 0;
  let totalSum = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    //get the value of the biggest num
    if (array[i] > array[i + 1] && array[i] > biggestNumber) {
      biggestNumber = array[i];
      totalSum += array[i + 1];
    } else {
      totalSum += array[i];
    }
  }

  if (biggestNumber == totalSum) {
    return true;
  } else return false;
};

let array = [4, 6, 23, 10, 3];
console.log(arrayAdditionI(array));
