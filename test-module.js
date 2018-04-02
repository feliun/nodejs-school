// const { sync, async } = require('nodejs-school');
const { sync, async } = require('.');

console.log(`With sync operations the outcome is: ${sync.add(2, 3)}`);

async.callbacks.add(2, 3, (err, result) => {
  console.log(`With callbacks the outcome is: ${result}`);
  async.promises.add(2, 3)
    .then((res) => {
      console.log(`With promises the outcome is: ${result}`);
    });
});