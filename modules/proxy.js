module.exports = (module) =>
  Object.keys(module).reduce((total, operation) => {
    const proxied = total[operation] = (...args) => {
      console.log(`My args are: ${[...args]}`);
      return module[operation](...args);
    };
    return Object.assign(total, proxied);
  }, {});