const withCallback = (next) => {
  setTimeout(() => next(null, 'hello world!', 500));
};

withCallback((err, msg) => {
  if (err) throw err;
  console.log('MSG: ', msg);
});

const withPromise = () => new Promise((resolve, reject) => {
  withCallback((err, msg) => {
    if (err) return reject(err);
    resolve(msg);
  });
});

withPromise()
  .then((msg) => console.log('MSG with promise: ', msg))
  .catch((err) => console.error(err)); // === .catch(console.error)