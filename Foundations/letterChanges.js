/*
have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
*/

const letterChange = (sentence) => {
    let lettersInASCII = []
    // Get all letters and store in ASCII char array
    for (let i = 0 ; i < sentence.length ; i++){
        // Reassign array to the number after it
        // Except space, will remain the same
        if(sentence.charCodeAt(i) !== 32) {
            lettersInASCII.push(sentence.charCodeAt(i)+ 1)
        } else {
            lettersInASCII.push(sentence.charCodeAt(i))
        }
    }

    // Print the char array to the console without commas
    // And if vowels, capitalize it
    let letters = []
    for(let i = 0 ; i < lettersInASCII.length ; i++) {
        if (String.fromCharCode(lettersInASCII[i]) === 'a'
        || String.fromCharCode(lettersInASCII[i]) === 'i' 
        || String.fromCharCode(lettersInASCII[i]) === 'u' 
        || String.fromCharCode(lettersInASCII[i]) === 'e'
        || String.fromCharCode(lettersInASCII[i]) === 'o'
        || String.fromCharCode(lettersInASCII[i]) === 'A'
        || String.fromCharCode(lettersInASCII[i]) === 'I' 
        || String.fromCharCode(lettersInASCII[i]) === 'U' 
        || String.fromCharCode(lettersInASCII[i]) === 'E'
        || String.fromCharCode(lettersInASCII[i]) === 'O') {
            letters.push(String.fromCharCode(lettersInASCII[i]).toUpperCase())
        } else {
            letters.push(String.fromCharCode(lettersInASCII[i]).toLowerCase())
        }
    }
    // Print to console
    letters.forEach(letter => {
        process.stdout.write(letter)
    })
    console.log('\n')
}

letterChange('We love nodeJS')




