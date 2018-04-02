const operations = require('../../modules/operations');
const auditAdapter = require('../promises/audit-adapter');

const { add, multiply, divide } = auditAdapter(operations); // They come from the adapter now!!

/*
  This is a promise-based implementation of the same examples in ../callbacks/async.js
*/

// ((((2 + 3) * 5) + 5))/6
async function operate() {
  try {
    const addition = await add(2,3);
    const multiplication = await(multiply(addition, 5));
    const moreAddition = await(add(multiplication, 5));
    return await(divide(moreAddition, 6));
  }
  catch(e) {
    console.error(`A sync OR async error would be captured here!: ${err.message}`);
  }
};

operate()
  .then((result) => console.log('Result in waterfall: ', result));