const { appendFile } = require('fs');
const DELAY = 500;
const AUDIT_FILE = 'audit-promises.txt';

module.exports = (module) =>
  Object.keys(module).reduce((total, operation) => {
    const adapter = {
      [operation]: (...args) => { // NO NEXT here
        const result = module[operation](...args);
        const audit = `${operation}(${[...args]}) = ${result}\n`;
        return new Promise((resolve, reject) => { // VERY important the 'return' bit
          appendFile(AUDIT_FILE, audit, (err) => {
            if (err) return reject(err);
            resolve(result);
          });
        });
      }
    };
    return Object.assign(total, adapter);
  }, {});