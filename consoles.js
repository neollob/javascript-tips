// Table

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const john = new Person('John', 'Smith')
const jane = new Person('jane', 'Doe')
const goku = new Person('Son', 'Goku')

console.table([john, jane, goku]) // Returns array table
