/* ARRAYS */

const list = [ 'this', 0, 'is', 34.56, 'a list', true, 'with elements', 10, 'from different types', 245 ];
console.log(list);

const first = list[0];
console.log(`The first element is: ${first}`);

const [ es6First, ...rest] = list;
console.log(`The first element is: ${es6First}`);
console.log(`The remaining is: ${rest}`);

console.log('"Map" transform every member of a list into something else, based on the specified logic');
const types = list.map((item) => typeof item); // single line in ES6 === "return"
console.log(types);

console.log('"Filter" helps keeping lists clean based on certain boolean criteria');
const strings = list.filter((item) => typeof item === 'string');
console.log(strings);

console.log('"Reduce" helps reducing a list of elements into a different data structure');
const numbers = list.filter((item) => typeof item === 'number');
console.log(numbers);
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(`The sum of all numbers is: ${sum}`);

const smartSum = list
  .filter((item) => typeof item === 'number')
  .reduce((total, num) => total + num, 0);

console.log(`We can concatenate map, reduce, filter plus other array methods: ${smartSum}`);

/* OBJECTS */

const obj = {
  a: 'a string',
  b: 34,
  c: {
    d: 'Another subobject'
  },
  e: (a, b) => a + b
};

const { a, b, e } = obj;
const deep = obj.c.d;
console.log(`a is a ${typeof a}, b is a ${typeof b} and e is a function: ${e(2, 3)}`);
console.log(`Objects could also be traversed as we did with d: ${deep}`);
