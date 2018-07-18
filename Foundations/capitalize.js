/*
Have the function LetterCapitalize(str) take the str parameter being passed 
and capitalize the first letter of each word. 
Words will be separated by only one space. 
*/

function capitalizeLetters(sentence) {
  // Get all words and store to the words array
  let words = sentence.split(String.fromCharCode(32));
  for (let i = 0; i < words.length; i++) {
    // Reassign words array with new value, capitalize the first letter
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  words.forEach(word => {
    process.stdout.write(word.toString());
  });
}

// console.log(capitalizeLetters("i am learning nodejs"));
capitalizeLetters("i am learning nodejs");
