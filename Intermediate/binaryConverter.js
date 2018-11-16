/**
 * Using the JavaScript language,
 * Have the function BinaryConverter(str) return the decimal form of the binary value.
 * For example: if 101 is passed return 5, or if 1000 is passed return 8.
 */

// Create binary table
const binaryTable = [128, 64, 32, 16, 8, 4, 2, 1];

// Define the binaryConverter function
const binaryConverter = binaryNumString => {
  // Split binaryNumString and store in array
  let binaryNumArray = binaryNumString.split("");

  // compare the binaryNumArray to binary table and add
  let totalDecimalValue = 0;
  let j = binaryTable.length - 1;

  for (let i = binaryNumArray.length - 1; i >= 0; i--) {
    if (binaryNumArray[i] !== "0") {
      totalDecimalValue += binaryTable[j];
    }
    j--;
  }
  return totalDecimalValue;
};

console.log(binaryConverter("101"));
console.log(binaryConverter("1000"));
