const async = require('async'); // external modules go to the top by convention
const operations = require('../../modules/operations');
const auditAdapter = require('./audit-adapter');

const { add, multiply, subtract, divide } = auditAdapter(operations); // They come from the adapter now!!

// ((((2 + 3) * 5) + 5))/6
async.waterfall([
  add.bind(null, 2, 3),
  multiply.bind(null, 5),
  add.bind(null, 5),
  (addition, cb) => divide(addition, 6, cb), // this operation is not conmutative - order matters
], (err, result) => {
  if (err) throw err;
  console.log('result: ', result);
});

/*
  Perform the following operations in series:
  2 + 3, 4 * 5, 3 -1, 10 / 2
*/

async.series([
  add.bind(null, 2, 3),
  multiply.bind(null, 4, 5),
  subtract.bind(null, 3, 1),
  divide.bind(null, 10, 2),
], (err, ...results) => {
  if (err) throw err;
  console.log('Results: ', ...results);
});

/*
  Perform the following operations in PARALLEL
  try to make them more messy by applying a different timeout:
  2 + 3, 4 * 5, 3 -1, 10 / 2
*/

async.parallel([
  add.bind(null, 2, 3),
  multiply.bind(null, 4, 5),
  subtract.bind(null, 3, 1),
  divide.bind(null, 10, 2),
], (err, ...results) => {
  if (err) throw err;
  console.log('Results: ', ...results);
});

// try to run these 3 operations one after the other in sequence