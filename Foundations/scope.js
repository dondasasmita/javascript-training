let iAmGlobal = 'someValues'

if (true){
    //this is a local variable only works inside the block of code
    let iamLocal = 'someMoreValues'

    //variable declaration using var, it is used for access globally
    var iAmGlobalToo = 'This is value from inside the block of code'

    console.log(iAmGlobal)
    console.log(iamLocal)
}
console.log(iAmGlobalToo)

