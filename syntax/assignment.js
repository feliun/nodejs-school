var text = "this is some variable";
console.log(`I can log the value of text: ${text}`);

let moreText = 'This is a variable as well. Mind we use "let" now!';
console.log("I could also output text like this: " + moreText);

console.log('About to cause a disaster...');
const constant = 'This value cannot be changed';
try {
  constant = "This is not permitted!";
} catch(e) {
  console.error(`I told you this would cause a SYNCHRONOUS error!
  Errors come with message: ${e.message}
  and also with stack: ${e.stack}`);
};