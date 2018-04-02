const asyncDouble = (x) =>
  new Promise((resolve) => setTimeout(() => resolve(x * 2), 500));

async function calculate(num) {
  const a = await asyncDouble(2);
  const b = await asyncDouble(3);
  const c = await asyncDouble(4);
  return num + a + b + c;
};

calculate(5)
.then(console.log)
.catch(console.error);