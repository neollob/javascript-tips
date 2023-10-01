// Convert to boolean

const isTrue = !0           // Expected value: true, typeof isTrue: 'boolean'
const alsoFalse = !!0       // Expected value: false, typeof alsoFalse: 'boolean'


// Convert to string

const val = 5 + ''      // Expected value: '5' -> typeof val: 'string'


// Convert to int

const int = '15'
int = +int              // Expected value: 15 -> typeof int: 'number'


// Convert float to int

const int2 = 19.8 | 0   // Expected value: 19 -> typeof int2: 'number'
