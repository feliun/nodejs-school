const initApp = require('./initApp');
const controller = require('..');

module.exports = ({ app, config }) => {

  let server;

  const start = () => {
    server = app.listen(config.app.port);
    initApp(app, config, controller);
    return Promise.resolve({ app });
  };

  const stop = () =>
    server.close();

  return {
    start,
    stop
  };

};