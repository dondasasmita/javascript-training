/** 
Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 
0 if they don't equal each other              
(ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
The array will not be empty, will only contain positive integers, and will not contain more than one mode.  
 */

// Define the meanMode function
const meanMode = array => {
  let meanNum = getMean(array);
  let modeNum = getMode(array);
  if (meanNum == modeNum) {
    return 1;
  } else {
    return 0;
  }
};

// Define mode function is to find the average
const getMean = array => {
  // variable to store the total
  let total = 0;
  // add all value
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  // return the average and round up the number
  return Math.round(total / array.length);
};

// Define mean function is to find the most frequent number
const getMode = array => {
  // variable to store number and count
  let numbers = {};
  let maxNumber = 1;
  let isMode;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    // if number does not exist count as 1
    if (numbers[number] == null) {
      numbers[number] = 1;
    }
    // else if number exists, add one count
    else {
      numbers[number] += 1;
    }
    // If count number is bigger than 1
    if (numbers[number] > maxNumber) {
      // assign isMode to that number
      isMode = array[i];
    }
  }
  return isMode;
};

// Run the meanMode function
array = [15, 15, 31, 5, 10, 31, 31];
array2 = [5, 3, 3, 3, 1];

console.log(meanMode(array)); // returns 0
console.log(meanMode(array2)); // return 1
