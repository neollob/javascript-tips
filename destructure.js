// Destructured value aliases

const car = {
    brand: "Tesla",
    performance: 1020
}

const { performance: whp } = car

console.log({ whp }) // Return: {whp: 1020}


// Remove property from object

const products = {
    "1": { "id": "1", "img": "./coffee-mug.png", "title": "Coffee-Mug - Card", "count": 1 },
    "2": { "id": "2", "img": "./coffee-mug2.png", "title": "Coffee-Mug - Meme", "count": 1 }
}

const { "1": toDelete, ...rest } = products

console.log(toDelete) // Return: {id: '1', img: './coffee-mug.png', title: 'Coffee-Mug - Card', count: 1}
console.log(rest) // Return: {"2": { "id": "2", "img": "./coffee-mug2.png", "title": "Coffee-Mug - Meme", "count": 1 }}
