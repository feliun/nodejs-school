const express = require('express');
var cors = require('cors')

const initSystem = require('./system');

const app = express();
app.use(cors())

const config = {
  app: {
    port: process.env.PORT || 8080
  }
};

const system = initSystem({ app, config });

system.start()
  .then(() => console.log(`Server listening at localhost:${config.app.port}`))
  .catch(console.error);