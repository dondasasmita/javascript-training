let getGrade = function(currentScore, totalScore){
    let scorePercentage = (currentScore/totalScore) * 100
    let myGrade = ''
    if (scorePercentage >= 80){
        myGrade = 'A'
    } else if (scorePercentage >= 65 && scorePercentage < 80){
        myGrade = 'B'
    } else if (scorePercentage >= 50 && scorePercentage < 65){
        myGrade = 'C'
    } else {
        myGrade = 'F'
    }
    return `Your grade is ${myGrade}`
}

let myResult = getGrade(8.5, 10)
console.log(myResult);