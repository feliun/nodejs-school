const operations = require('./operations');

const { add, subtract, multiply } = operations;

console.log('I can use operations from another module');
console.log('even if I haven\´t written it!');
console.log('That way we keep implementations abstract.');
console.log('Node JS is heavily in the KISS, Unix philosophy.');
console.log('Write small, functional modules that do ONE thing well.');

console.log(`It should be 5: ${add(2, 3)} and eight: ${multiply(2, 4)} and six: ${subtract(7, 1)}`);