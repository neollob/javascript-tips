// Destructured value aliases

const car = {
    brand: "Tesla",
    performance: 1020
}

const { performance: whp } = car

console.log({ whp }) // Return: {whp: 1020}