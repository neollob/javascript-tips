// Convert to boolean

const isTrue = !0; // Expected value: true, typeof isTrue: 'boolean'
const alsoFalse = !!0; // Expected value: false, typeof alsoFalse: 'boolean'

// Convert to string

const val = 5 + ''; // Expected value: '5' -> typeof val: 'string'

// Convert to int

const int = '15';
int = +int; // Expected value: 15 -> typeof int: 'number'

// Convert float to int

const int2 = 19.8 | 0; // Expected value: 19 -> typeof int2: 'number'

// Remove last digits

const int3 = (1253 / 10) | 0; // Expected value: 125 -> typeof int2: 'number'

// Use the `space` attribute to format the JSON.stringify output.

const user = { name: 'Marko', handle: '@denicmarko' };

JSON.stringify(user);
// '{"name":"Marko","handle":"@denicmarko"}'

JSON.stringify(user, null, 2);
// {
//  "name": "Marko",
//  "handle": "@denicmarko"
// }
