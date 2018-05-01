//Declare and instantiate an Array
const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

/* BEGINNING FUNCTIONS */
//shift function to delete the first index
numbers.shift()
console.log(numbers);

//unshift to add a value to the first position
numbers.unshift('Something new')
console.log(numbers);

/* MIDDLE FUNCTIONS */

//splice function below is to delete value from the index of 2, only 1 value ,and replace with the word Hello
numbers.splice(2,1,'Hello')
console.log(numbers);


/* END FUNCTIONS */

//pop function is to remove the value at the last index
numbers.pop()
console.log(numbers);

//push function is to add the value at the end of the array
numbers.push('Seven')
console.log(numbers);





