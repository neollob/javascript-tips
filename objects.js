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