const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

//for loop to go through each value in the days array and print the value
for (let index = 0; index < days.length; index++) {
    console.log(days[index]);
}

//for loop to go through each value in the days array from the last to the first index
for (let index = days.length - 1; index >= 0; index--) {
    console.log(days[index]);
}

//for each loop
days.forEach(function (day, index){
    console.log(`At the index of ${index + 1} -- ${day}`)
})