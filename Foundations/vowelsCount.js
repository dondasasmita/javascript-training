/*
Vowel Count                                                                       
Using the JavaScript language, have the function VowelCount(str) take the str 
string parameter being passed and return the number of vowels the string contains 
(ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge.                                                                  
*/

const vowelCount = words => {
  const vowels = ["A", "a", "I", "i", "U", "u", "E", "e", "O", "o"];
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (words.charAt(i) === vowels[j]) {
        count++;
      }
    }
  }
  console.log(count);
};

vowelCount("Hello");
vowelCount("Donda is learning to write regex");
