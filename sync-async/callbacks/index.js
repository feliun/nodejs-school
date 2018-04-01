const operations = require('./operations');
const { add, subtract, multiply } = operations;

// notice functions don't return results explicitely
// but instead they get transmitted by the callbacks (plus the error)
console.log('Computing operations Asynchronously!!');
add(2, 3, (err, result) => {
  if (err) console.log(`An error happened: ${err.message}`);
  console.log(`The result has been computed: ${result}`);
});
console.log('This should run before the operation completes!');

// you may be able to see this easier like this:
console.log('Computing operations Asynchronously!!');
const callback = (err, result) => {
  if (err) console.log(`An error happened: ${err.message}`);
  console.log(`The result has been computed: ${result}`);
};
add(2, 3, callback);
console.log('This should run before the operation completes!');