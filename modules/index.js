const operations = require('./operations');
const proxy = require('./proxy');

const { add, subtract, multiply } = proxy(operations); // They come from the proxy now!!

console.log(`
This is a proxy, it does some extra stuff for us,
abstracting that extra logic from the original modules
This is a super useful, and very well-known technique.
It allows us to enrich/limit/control functionality from 3rd parties
without actually touching their code.
It is implemented on ES6 with its native Proxy class.
`);

console.log(`
Dependency injection makes your modules less coupled, resulting in a more maintainable codebase.
Easier unit testing: Instead of using hardcoded dependencies you can pass them into the module you would like to use.
With dependency injection, after the interfaces are defined it is easy to work without any merge conflicts.
`);

console.log(`It should be 5: ${add(2, 3)} and eight: ${multiply(2, 4)} and six: ${subtract(7, 1)}`);