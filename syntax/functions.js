// first-class citizens!

function version1(obj) {
  return obj.a + obj.b;
};

const version2 = function(obj) {
  return obj.a + obj.b;
};

const version3 = (obj) => {
  return obj.a + obj.b;
};

const version4 = (obj) => obj.a + obj.b;

const version5 = ({ a, b }) => a + b;

const allVersions = [ version1, version2, version3, version4, version5 ];
const results = allVersions.map((fn) => fn({ a: 2, b: 3 }));
const allFive = results.filter((result) => result === 5);
console.log(`Initially we had ${allVersions.length} functions, and the number of functions delivering the same result is: ${allFive.length}`);

const list = [ 'this', 0, 'is', 34.56, 'a list', true, 'with elements', 10, 'from different types', 245 ];
const byNumber = (item) => typeof item === 'number';
const byString = (item) => typeof item === 'string';
const numbers = list.filter(byNumber);
const strings = list.filter(byString);

console.log(numbers);
console.log(strings);

// Let's use the strategy pattern based on even/odd positions
const operations = [ ...new Array(10).keys() ].map((index) => ( index % 2 === 0 ? byNumber: byString ));
const outcome = operations.map((fn) => list.filter(fn)); // soooo nice!
console.log(outcome);

/* Functions can return other functions - curryfication!
In mathematics and computer science, a higher-order function is a function that does at least one of the following:
- takes one or more functions as arguments
- returns a function as its result
*/

// HOF returning another function
const add = (x) => (y) => x + y;
const add5 = add(5); // same as add.bind(add, 5) on const add = (a, b) => a + b;
const eight = add5(3);
console.log(`${eight} should equal 8`);

// HOF accepting another function as param (strategy, command, proxy, ...)
const regularAdd = (a, b) => a + b;
const operate = (fn) => (...args) => fn(...args);
const proxyAdd = operate(regularAdd);
console.log(`This should add: operate(3, 5) === ${proxyAdd(3, 5)}`);