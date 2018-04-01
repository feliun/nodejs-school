/*

Interfaces need to change: they need to accept now a registered callback.
So they can continue accordingly their execution AFTER they are done.
We saw earlier mixing up async with sync doesn't really work
(unless you know very well what you're doing).

Callbacks are usually the last parameter.
Callbacks are functions which accept one or more params.
By convention, the first param is always the error (that may/may not happen).
DO NOT confuse sync errors with async errors.

*/

const DELAY = 500;

const add = (a, b, next) => {
  setTimeout(() => next(null, a + b), 500);
};
const subtract = (a, b, next) => {
  setTimeout(() => next(null, a - b), 500);
};
const multiply = (a, b, next) => {
  setTimeout(() => next(null, a * b), 500);
};
const divide = (a, b, next) => {
  setTimeout(() => next(null, a / b), 500);
};

module.exports = {
  add,
  subtract,
  multiply,
  divide
};