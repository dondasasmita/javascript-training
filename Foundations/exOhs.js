/*
* Using the JavaScript language, have the function ExOh(str) take the str parameter   *
*  being passed and return the string true if there is an equal number of x's and o's, *
*  otherwise return the string false. Only these two letters will be entered in the    *
*  string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the    *
*  output should return false because there are 6 x's and 5 o's.            
*/

const exOh = str => {
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x") {
      countX += 1;
    } else {
      countO += 1;
    }
  }

  if (countX === countO) {
    return true;
  } else {
    return false;
  }
};

console.log(exOh("xoxox"));
