// How to use the Map object to store key-value pairs and quickly iterate over them

const myMap = new Map();

myMap.set('keyl', 'valuel');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

for (const [key, value] of myMap) {
    console.log(key, value);
}

// Getting the value for a specific key
const value = myMap.get('key2');

// Checking if a key exists in the Map
const hasKey = myMap.has('key3');