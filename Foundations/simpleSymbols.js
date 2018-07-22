/*
Have the function SimpleSymbols(str) take the str parameter being passed 
and determine if it is an acceptable sequence by either returning the string true or false. 
The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) 
and for the string to be true each letter must be surrounded by a + symbol. 
So the string to the left would be false. The string will not be empty and will have at least one letter. 
*/

const simpleSymbols = string => {
  let chars = [];
  let result;

  // Push each character to chars array
  for (let i = 0; i < string.length; i++) {
    chars.push(string.charCodeAt(i));
  }

  //check each index
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== 61 && chars[i] !== 43) {
      //check if the previous and after the character is + (43)
      //if found return true and break out of loop
      if (chars[i - 1] === 43 && chars[i + 1] === 43) {
        result = true;
        break;
      }
    } else result = false;
  }
  return result;
};

console.log(simpleSymbols("a===+a+sad++cv==="));
