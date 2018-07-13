/*
Have the function FirstReverse(str) take the str parameter being passed 
and return the string in reversed order. 
For example: if the input string is "Hello World and Coders" then 
your program should return the string sredoC dna dlroW olleH. 
*/


function reverseString (sentence) {
    //store sentence in char array
    let charArray = sentence.split("")
    //reverse the charArray
    let reversedArray = charArray.reverse()
    //print to console without new line
    for (let i = 0 ; i < reversedArray.length ; i ++) {
        process.stdout.write(reversedArray[i])
    }
}

//call the function and passing in String parameter
reverseString("I like nodeJS")