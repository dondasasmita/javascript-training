//declare default values in the parameters
let guestUser = function(name = 'unknown', courseCount = 0){
    return 'Hello ' + name + ' and your course count is ' + courseCount
}

//default values will be used here
console.log(guestUser());

//using values that are passed in the parameters
console.log(guestUser('John', 5));