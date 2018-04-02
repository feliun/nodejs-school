const operations = require('../../modules/operations');
const auditAdapter = require('./audit-adapter');

const { add, subtract, multiply } = auditAdapter(operations); // They come from the adapter now!!


// (((2 + 3) * 5) - 5) * 2
add(2, 3, (err, addition) => {
  if (err) throw err;
  multiply(addition, 5, (err, multiplication) => {
    if (err) throw err;
    subtract(multiplication, 5, (err, sub) => {
      if (err) throw err;
      multiply(sub, 2, (err, result) => {
        if (err) throw err;
        console.log('result: ', result);
      });
    });
  });
});