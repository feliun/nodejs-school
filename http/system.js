const initApp = require('./initApp');

module.exports = ({ app, config, controller }) => {

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