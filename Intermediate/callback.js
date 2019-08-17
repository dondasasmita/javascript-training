const calculate = (num1, num2, callback) => {
  callback(num1, num2);
};

calculate(5, 5, (a, b) => {
  console.log(a * b);
});
