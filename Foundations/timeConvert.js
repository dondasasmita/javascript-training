/*
have the function TimeConvert(num) take the num parameter being passed 
and return the number of hours and minutes the parameter converts to 
(ie. if num = 63 then the output should be 1:3). 
Separate the number of hours and minutes with a colon. 
*/

const timeConvert = num => {
  const hour = Math.round(num / 60);
  const minute = num % 60;

  return `${hour} : ${minute}`;
};

console.log(timeConvert(63));
console.log(timeConvert(183));
console.log(timeConvert(360));
console.log(timeConvert(215));
console.log(timeConvert(10));
