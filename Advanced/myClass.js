class User {
    constructor(firstName, middleName, lastName, credit){
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        this.credit = credit
    }

    getFullName(){
        if (this.middleName === ''){
            return `${this.firstName} ${this.lastName} is my fullname.`
        } else {
            return `${this.firstName} ${this.middleName} ${this.lastName} is my fullname.`
        }  
    }

    editName(newName){
        //split the name into an array using the split method
        const fullname = newName.split(' ')
        this.firstName = fullname[0]
        this.lastName = fullname[fullname.length - 1]
        //if new name has more than 2 words add the middleName
        if (fullname.length > 2){
            this.middleName = fullname[1]
        }
    }
}

//creating mike object
const mike = new User('Mike', '', 'Anderson', 48)
//creating john object
const john = new User('John', '', 'Smith', 56)

console.log(mike.getFullName())

//editing john's name
john.editName('Johny Cash')
console.log(john.getFullName())

//editing mike's name and adding middle name
mike.editName('Michael William Anderson')
console.log(mike.getFullName())