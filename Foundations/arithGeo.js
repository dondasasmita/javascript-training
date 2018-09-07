/*
   Arith Geo                                                                           *
*  Using the JavaScript language, have the function ArithGeo(arr) take the array of    *
*  numbers stored in arr and return the string "Arithmetic" if the sequence follows    *
*  an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If   *
*  the sequence doesn't follow either pattern return -1. An arithmetic sequence is     *
*  one where the difference between each of the numbers is consistent, where as in a   *
*  geometric sequence, each term after the first is multiplied by some constant or     *
*  common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric                        *
*  example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not  *
*  be entered, and no array will contain all the same elements.             
*/

const arithGeo = array => {
  let isArithmetic = false;
  let isGeometric = false;
  let isUnknown = false;
  let arithmetic = "Arithmetic";
  let geometric = "Geometric";
  let unknown = "Unknown";
  let tempArray = new Array();

  // go through each array index
  for (let i = 0; i < array.length - 1; i++) {
    // check the difference between one index to another
    let sequence = array[i + 1] - array[i];
    tempArray.push(sequence);
  }

  // Need to modify this array
  for (let i = 0; i < tempArray.length - 1; i++) {
    if (tempArray[i] === tempArray[i + 1]) {
      isArithmetic = true;
    } else if (tempArray[i] % tempArray[0] == 0) {
      isGeometric = true;
    } else {
      isUnknown = true;
    }
  }

  if (isArithmetic === true) {
    console.log(arithmetic);
  } else if (isGeometric === true) {
    console.log(geometric);
  } else if (isUnknown === true) {
    console.log(unknown);
  }
};

let array = [1, 4, 6, 8];
let array1 = [2, 6, 18, 54];

arithGeo(array);
arithGeo(array1);
