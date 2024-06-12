// Destructured value aliases

const car = {
  brand: 'Tesla',
  performance: 1020,
};

const { performance: whp } = car;

console.log({ whp }); // Return: {whp: 1020}

// Remove property from object

const myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
};
const get = () => {
  const { make, ...myCarWO } = myCar;
  return myCarWO;
};
console.log(get()); // Return: { model: 'Mustang', year: 1969 }

// Remove property from object

const products = {
  1: { id: '1', img: './coffee-mug.png', title: 'Coffee-Mug - Card', count: 1 },
  2: {
    id: '2',
    img: './coffee-mug2.png',
    title: 'Coffee-Mug - Meme',
    count: 1,
  },
};

const { 1: toDelete, ...rest } = products;

console.log(toDelete); // Return: {id: '1', img: './coffee-mug.png', title: 'Coffee-Mug - Card', count: 1}
console.log(rest); // Return: {"2": { "id": "2", "img": "./coffee-mug2.png", "title": "Coffee-Mug - Meme", "count": 1 }}

// Remove property from object

const { property, ...remainingObject } = object;

let blog = {
  name: 'Wisdom Geek',
  author: 'Saransh Kataria',
  editorial: 'McGraw Hill',
};
const { author, ...blogRest } = blog;
console.log(blogRest); // {name: 'Wisdom Geek', editorial:'McGraw Hill'};
console.log(blog); // { name: 'Wisdom Geek', author: 'Saransh Kataria', editorial: 'McGraw Hill' }

const keyToRemove = 'propertyToBeRemoved';
const { [keyToRemove]: removedProperty, ...remainingObject_2 } = object;

let blog1 = {
  name: 'Wisdom Geek',
  author: 'Saransh Kataria',
  editorial: 'McGraw Hill',
};
const key = 'author';
const { [key]: removedProperty_2, ...blogRest_2 } = blog1;
console.log(blogRest_2); // { name: 'Wisdom Geek', editorial: 'McGraw Hill' }
console.log(blog1); // { name: 'Wisdom Geek', author: 'Saransh Kataria', editorial: 'McGraw Hill' }
console.log(removedProperty_2); // 'Saransh Kataria'
