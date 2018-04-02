const syncProxy = require('./modules/proxy');
const syncOps = require('./modules/operations');

const asyncCallbackAdapter = require('./sync-async/callbacks/audit-adapter');
const asyncPromiseAdapter = require('./sync-async/promises/audit-adapter');

module.exports = {
  sync: syncProxy(syncOps),
  async: {
    promises: asyncPromiseAdapter(syncOps),
    callbacks: asyncCallbackAdapter(syncOps)
  }
};