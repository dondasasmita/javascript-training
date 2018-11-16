/**
 * Using the JavaScript language, have the function PrimeMover(num) return the numth prime number.
 * The range will be from 1 to 10^4.
 * For example: if num is 16 the output should be 53 as 53 is the 16th prime number.
 */

// Load function from previous exercise
const primeTime = require("./primeTime");

// Store all prime nums
let arrayOfPrimeNumbers = [];

// Function to fetch prime numbers
const getPrimeNums = range => {
  // Check if i is a prime num
  for (let i = 1; i <= range; i++) {
    let isNumPrime = primeTime(i);
    if (isNumPrime == true) {
      arrayOfPrimeNumbers.push(i);
    }
  }
};

// Function to return the numth prime number
const primeMover = num => {
  return console.log(arrayOfPrimeNumbers[num - 1]);
};

// RUN THE FUNCTIONS

// Get all prime numbers from 1 to 1000
getPrimeNums(1000);
primeMover(4); // return 7
primeMover(50); // return 53
