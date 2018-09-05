/*
   Palindrome                                                                          
*  Using the JavaScript language, have the function Palindrome(str) take the str       
*  parameter being passed and return the string true if the parameter is a palindrome, 
*  (the string is the same forward as it is backward) otherwise return the string      
*  false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers  
*  will not be part of the string.                               
*/

const Palindrome = str => {
  let isPalindrome;
  let indexBackwards = str.length - 1;
  str = str.replace(/ /g, "").toLowerCase();
  for (let index = 0; index < str.length / 2; index++) {
    if (str.charAt(index) === str.charAt(indexBackwards)) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
    indexBackwards -= 1;
  }
  return isPalindrome;
};

console.log(Palindrome("racecar"));
console.log(Palindrome("hello"));
