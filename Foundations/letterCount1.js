/*
Letter Count I                                                                      *
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
        if (words[i].charAt(j) === words[i].charAt(k)) {
          // check if wordsWithRepeatedLetters is empty
          if (wordsWithRepeatingLetters.length == 0) {
            wordsWithRepeatingLetters.push({
              word: words[i],
              repeatedLetterFound: [words[i].charAt(j).toString()],
              count: 1
            });
          } else {
            if (words[i] !== wordsWithRepeatingLetters[i].word) {
              wordsWithRepeatingLetters.push({
                word: words[i],
                repeatedLetterFound: [words[i].charAt(j).toString()],
                count: 1
              });
            } else {
              wordsWithRepeatingLetters[i].count += 1;
              wordsWithRepeatingLetters[i].repeatedLetterFound.push(
                words[i].charAt(j).toString()
              );
            }
          }
        }
      }
    }
  }
  return wordsWithRepeatingLetters;
};

console.log(letterCountI("Today, is the greatest day ever!"));
