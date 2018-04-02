const operations = require('../../modules/operations');
const auditAdapter = require('./audit-adapter');

const { add, subtract, multiply } = auditAdapter(operations); // They come from the proxy now!!


// (2 + 3) * 5
add(2, 3, (err, addition) => {
  if (err) throw err;
  multiply(addition, 5, (err, multiplication) => {
    if (err) throw err;
    console.log('result: ', multiplication);
  });
});