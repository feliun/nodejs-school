const DELAY = 500;
const AUDIT_FILE = 'audit.txt';
const { appendFile } = require('fs');

module.exports = (module) =>
  Object.keys(module).reduce((total, operation) => {
    const adapter = {
      [operation]: (...args) => {
        const next = args.pop();
        const result = module[operation](...args);
        const audit = `${operation}(${[...args]}) = ${result}\n`;
        appendFile(AUDIT_FILE, audit, (err) => {
          if (err) return next(err); // VERY important the 'return' bit
          next(null, result); // mind the first parameter!!!
        });
      }
    };
    return Object.assign(total, adapter);
  }, {});