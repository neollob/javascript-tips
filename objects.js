// Iterate object properties by entries

Object.entries(shoppingCart).map(([key, product]) => {
    console.log({ key, product })
})

// Iterate object properties by keys
Object.keys(shoppingCart).map((key) => (
    { ...shoppingCart[key] }
)).map(product => {
    console.log({ product })
})

// Sum object values

const demoObject = { a: 2, b: 3, c: 1 }
const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
console.log(sumValues(demoObject)) //Returns: 6

// Add property1 & property2 to object
object = { ...object, property1: value1, property2: value2 }

// Add all properties from new_object
object = { ...object, ...new_object }

const employee = { id: 1, name: "Jone Doe", age: 29 }

// Clone object
var employee_copy = { ...employee} // Result: { id: 1, name: "Jone Doe", age: 29 }

// Clone and add property to new object
var employee_copy = { ...employee, location: {}, id: 130 } // Result: { id: 130, name: "Jone Doe", age: 29, location: {} }

// updated exisiting object with new property
employee = { ...employee, id: 130 } // Result: { id: 130, name: "Jone Doe", age: 29}

// Clone object
Object.assign( employee, { id: 670 }); // Result: { id: 670, name: "Jone Doe", age: 29}

var person = { location: {} };

Object.assign( employee, person); // Result: { id: 670, name: "Jone Doe", age: 29, location: {} }