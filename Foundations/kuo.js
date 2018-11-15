/**
 * Functions to calculate Kuo Number in Feng Shui For Men and Female
 */

// Define the Kuo Calculation Function for Men
const getKuoForMen = num => {
  let kuoValue = (100 - num) % 9;
  if (kuoValue == 2 || kuoValue == 5 || kuoValue == 9) {
    return "Strong";
  } else if (kuoValue == 3 || kuoValue == 4 || kuoValue == 7) {
    return "Medium";
  } else {
    return "Weak";
  }
};

// Define the Kuo Calculation Function for Women
const getKuoForWomen = num => {
  let kuoValue = (num - 4) % 9;
  if (kuoValue == 2 || kuoValue == 5 || kuoValue == 9) {
    return "Strong";
  } else if (kuoValue == 3 || kuoValue == 4 || kuoValue == 7) {
    return "Medium";
  } else {
    return "Weak";
  }
};

// Variables to store the year
let husbandBirthYear = 86;
let wifeBirthYear = 81;

// Run the functions
console.log(getKuoForMen(husbandBirthYear));
console.log(getKuoForWomen(wifeBirthYear));
