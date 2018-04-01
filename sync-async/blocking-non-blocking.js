const fs = require('fs');
const { join } = require('path');

const filePath = join(process.cwd(), 'dummy.txt');

console.log('Reading file as a BLOCKING, synchronous operation');
const data = fs.readFileSync(filePath); // blocks here until file is read
console.log('Data has been read synchronously!');

console.log('Reading file as a NON BLOCKING, Asynchronous operation');
fs.readFileSync(filePath, (err, data) => {
  if (err) throw err;
  console.log('Data is now available!');
});
console.log('Data has NOT been read Asynchronously YET!');

console.log('This example is completely wrong! I need to read and THEN delete a file');
fs.readFile(filePath, (err, data) => {
  if (err) throw err;
  console.log('File is NOW available');
});
console.log('Deleting file...');
// fs.unlinkSync(filePath);