/*
have the function ABCheck(str) take the str parameter being passed 
and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once
(ie. "lane borrowed" would result in true because there is exactly three characters between a and b). 
Otherwise return the string false.
*/

const abCheck = words => {
  // check if words consists of a , any charactes x3 (represented by .), and b
  // store in match variable
  const match = words.search(/a...b/);
  if (match > -1) {
    return true;
  } else {
    return false;
  }
};

console.log(abCheck("hello"));
console.log(abCheck("lane borrowed"));
