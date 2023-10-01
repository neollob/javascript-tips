['a', 'b'].concat(['c'])            // ['a', 'b', 'c']
['a', 'b'].join(['-'])              // 'a-b'
['a', 'b', 'c'].slice(1)            // ['b', 'c']
['a', 'b', 'c'].indexOf('b')        // 1
['a', 'b', 'b'].lastIndexOf('b')    // 2
[1, 2, 3].map(x => x * 2)           // [2, 4, 6]
[2, 15, 3].sort()                   // [15, 2, 3]
[1, 2, 3].reverse()                 // [3, 2, 1]
[1, 2, 3].reduce((x, y) => x * y)   // 6
[1, 2, 3].length                    // 3
[1, 2, 3].every(x => x < 10)        // true
[1, 2, 3].some(x => x < 2)          // true

const arr = [1, 2, 3]

const w = arr.shift()       // arr = [2, 3],        x = 1
const x = arr.unshift(9)    // arr = [9, 1, 2, 3],  x = 4
const y = arr.pop()         // arr = [1, 2],        x = 3
const z = arr.push(5)       // arr = [1, 2, 3, 5],  x = 4