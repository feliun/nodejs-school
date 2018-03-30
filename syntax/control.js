const ZERO = 0;

if (ZERO == 0) {
  console.log('A comparison with == works!');
}

if (ZERO === 0) {
  console.log('A comparison with === works! But mind this -> https://stackoverflow.com/questions/23841001/comparing-two-numbers-in-javascript-what-about-the-fact-those-are-doubles-and-t');
}

if (ZERO === 1) {
  console.log('This should not be true');
} else {
  console.log('This should still be zero');
}

// usual while, for, do-while, switch

const text = ZERO === 0 ? 'still is 0' : 'the world will explode!';
console.log(text);

let moreText = ZERO === 1 || 'the first statement if false so it defaults to the next value';
console.log(moreText);

console.log(undefined || 'anything but undefined');
console.log(null || 'anything but null');

moreText = ZERO === 0 && 3.14;
console.log(`THIS shows a VERY important feature in JS: variables could contain any type: ${moreText} <- ${typeof moreText}`);
console.log('JS uses duck typing, and is SUPER powerful: https://en.wikipedia.org/wiki/Duck_typing');
