/* Letter Count I                                                                      *
*  Have the function LetterCountI(str) take the str parameter being passed and return  *
*  the first word with the greatest number of repeated letters. For example:           *
*  "Today, is the greatest day ever!" should return greatest because it has 2 e's      *
*  (and 2 t's) and it comes before ever which also has 2 e's. If there are no words    *
*  with repeating letters return <b>-1</b>. Words will be separated by spaces.         *
*/

const letterCountI = string => {
  // split the string into words
  let words = string.split(/\W/);
  // store words with repeating letters
  let wordsWithRepeatingLetters = [];
  // check if the word has repeating letters
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length - 1; j++) {
      for (let k = j + 1; k <= words[i].length - 1; k++) {
        // if the same letter is found
        if (words[i].charAt(j) === words[i].charAt(k)) {
          // check if wordsWithRepeatedLetters is not empty
          if (wordsWithRepeatingLetters.length !== 0) {
            // compare the word
            for (let x = 0; x < wordsWithRepeatingLetters.length; x++) {
              // If the word exists in the array
              if (words[i] === wordsWithRepeatingLetters[x].word) {
                wordsWithRepeatingLetters[x].count += 1;
                wordsWithRepeatingLetters[x].repeatedLetterFound.push(
                  words[i].charAt(j).toString()
                );
              }
              // If new, push the word to the array
              else {
                wordsWithRepeatingLetters.push({
                  word: words[i],
                  repeatedLetterFound: [words[i].charAt(j).toString()],
                  count: 1
                });
                break;
              }
            }
          }
          // if the array does not exists
          else {
            // insert the new word to wordsWithRepeatingLetters array
            wordsWithRepeatingLetters.push({
              word: words[i],
              repeatedLetterFound: [words[i].charAt(j).toString()],
              count: 1
            });
          }
        }
      }
    }
  }
  return findTheGreatest(wordsWithRepeatingLetters);
};

// Function to find the greatest value in the array
const findTheGreatest = array => {
  let isTheGreatest;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].count > array[i + 1].count) {
      isTheGreatest = array[i].word;
      // } else {
      //   return -1;
    }
  }
  if (isTheGreatest != null) {
    return isTheGreatest;
  } else {
    return -1;
  }
};

// Running the function
console.log(letterCountI("Today, is the greatest day ever!")); // returns greatest
console.log(letterCountI("Donda is not the only one that has double letters")); // returns -1
console.log(letterCountI("Dondaaxx is the only one that has double letters")); // returns Dondaaxx
