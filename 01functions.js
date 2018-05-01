//a function, passing one String parameter
let sayHello = function(name) {
    console.log(`Greeting message for ${name}`);
    console.log(`Hey, ${name} !`);
}

sayHello('Donda')


//a function, passing two String parameters
let fullNameMaker = function(firstName, lastName){
    console.log('Welcome to my website');
    console.log(`Happy to have you, ${firstName} ${lastName}`);
}

fullNameMaker('Donda', 'Sasmita')


//a function, passting two ints parameters
let mySum = function(num1, num2){
    let totalNums = num1 + num2
    return totalNums
}

console.log(mySum(15, 84))