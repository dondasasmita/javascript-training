/*
have the function AlphabetSoup(str) take the str string parameter being passed 
and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
Assume numbers and punctuation symbols will not be included in the string. 
*/

// sorting
const bubbleSort = a => {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        var temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const alphabetSoup = word => {
  let charArrayInASCII = [];
  let charInLetters = [];
  for (let i = 0; i < word.length; i++) {
    charArrayInASCII.push(word.charCodeAt(i));
  }
  bubbleSort(charArrayInASCII);
  for (let i = 0; i < charArrayInASCII.length; i++) {
    charInLetters.push(String.fromCharCode(charArrayInASCII[i]));
  }
  return charInLetters;
};

console.log(alphabetSoup("hello"));
