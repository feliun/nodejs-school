const { createWriteStream } = require('fs');
const file = createWriteStream('./massive.txt');

const random = () => Math.floor(Math.random() * 1000);

for(let i=0; i<= 1e6; i++) {
  const a = random();
  const b = random();
  file.write(`add(${a}, ${b}) = ${ a + b }\n`);
};

file.end();