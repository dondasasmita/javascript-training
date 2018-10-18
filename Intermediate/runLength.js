/*
Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string
using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character 
and outputting that number along with a single character of the repeating sequence. For example:
"wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
*/

const runLength = string => {
  // Split the string into array1
  const arrayOfStrings = string.split("");
  // Run countLetter function
  let newArray = countLetter(arrayOfStrings);
  // return the array from countLetter as string
  return newArray;

  // Insert them to array of objects
  // {letter: , count:}
  // Insert the attributes into array
};

// Function to count letters and insert them into array of objects
const countLetter = letters => {
  // Array to store unique letters
  let uniqueLetters = letters.filter(function(letter, pos) {
    return letters.indexOf(letter) == pos;
  });

  // Store all the letter object include the count
  let letterAndCount = [];
  for (let i = 0; i < uniqueLetters.length; i++) {
    let letterObj = {
      letter: uniqueLetters[i],
      count: 0
    };
    letterAndCount.push(letterObj);
  }

  // NOTE: Above 2 variables could be refactored and made simpler

  // Check letters againts letter in letterAndCount
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < uniqueLetters.length; j++) {
      if (letters[i] === letterAndCount[j].letter) {
        letterAndCount[j].count += 1;
      }
    }
  }

  return letterAndCount;
};

const donda = "donda";
// console.log(countLetter(donda));
console.log(runLength(donda));
