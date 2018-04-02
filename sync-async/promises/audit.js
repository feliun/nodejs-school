const operations = require('../../modules/operations');
const auditAdapter = require('./audit-adapter');

const { add, subtract, multiply } = auditAdapter(operations); // They come from the proxy now!!

// ((2 + 3) * 5) - 3
add(2, 3)
  .then((addition) => {
    return multiply(addition, 5);
  })
  .catch((err) => {
    console.error(`A LOCAL error would be captured here. A good practice is to handle it and rethrow it: ${err.message}`);
    throw err; // "catch" in promises are also able to handle SYNC errors, very very useful! (in callbacks they get swallowed)
  })
  .then((multiplication) => {
    return subtract(multiplication, 3);
  })
  .then((result) => {
    console.log('Result: ', result);
  })
  .catch((err) => {
    console.error(`A global error in the chain would be captured here: ${err.message}`);
  });

// nicer formatting
add(2, 3)
  .then((addition) => multiply(addition, 5)) // implicit 'return'
  .then((multiplication) => subtract(multiplication, 3))
  .then((result) => console.log('Result: ', result))
  .catch((err) => console.error(`A global error in the chain would be captured here: ${err.message}`));