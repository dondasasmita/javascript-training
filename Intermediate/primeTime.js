/*
 * Have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter
 * is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
 */

// a function that finds factors
const findFactor = num =>
  Array.from(Array(num + 1), (_, i) => i).filter(i => num % i === 0);

// function that finds prime number
const PrimeTime = num => {
  let array = findFactor(num);
  if (array[0] == 1 && array[1] == num) {
    return true;
  } else {
    return false;
  }
};

module.exports = PrimeTime;
