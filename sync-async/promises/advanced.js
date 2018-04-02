const operations = require('../../modules/operations');
const auditAdapter = require('./audit-adapter');

const { add, multiply, subtract, divide } = auditAdapter(operations); // They come from the adapter now!!

/*
  This is a promise-based implementation of the same examples in ../callbacks/async.js
*/

// ((((2 + 3) * 5) + 5))/6
add(2, 3)
  .then((addition) => multiply(addition, 5))
  .then((multiplication) => add(multiplication, 5))
  .then((addition) => divide(addition, 6))
  .then((result) => console.log('Result in waterfall: ', result))
  .catch((err) => console.error(`A global error in the chain would be captured here: ${err.message}`));

/*
  Perform the following operations in series:
  2 + 3, 4 * 5, 3 -1, 10 / 2
*/

const results = [];
add(2, 3)
  .then((res) => results.push(res))
  .then(() => multiply(4, 5))
  .then(results.push)
  .then(() => subtract(3, 1))
  .then((res) => results.push(res))
  .then(() => divide(10, 2))
  .then((res) => results.push(res))
  .then(() => console.log('Result in series: ', ...results))
  .catch((err) => console.error(`A global error in the chain would be captured here: ${err.message}`));

/*
  Perform the following operations in PARALLEL
  try to make them more messy by applying a different timeout:
  2 + 3, 4 * 5, 3 -1, 10 / 2
*/

Promise.all([
  add(2, 3),
  multiply(4, 5),
  subtract(3, 1),
  divide(10, 2)
]).then((results) => console.log('Result in parallel: ', ...results))
.catch((err) => console.error(`A global error in the chain would be captured here: ${err.message}`));
