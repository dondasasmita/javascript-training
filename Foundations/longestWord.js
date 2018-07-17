/*
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.
 */

 function findLongestWord (sentence) {
     //store sentence in words array
     const words = sentence.split(" ")
     //store the longest word
     let theLongest = ""
     for (let i = 0 ; i < words.length ; i++) {
         if (words[i].length > theLongest.length) {
             theLongest = words[i]
         }
     }
     return theLongest
 }

 console.log(findLongestWord("I need to solidify my nodeJS skills"))