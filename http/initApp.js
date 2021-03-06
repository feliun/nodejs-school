const bodyparser = require('body-parser');
const debug = require('debug')('nodejs-school:calculator');
const fs = require('fs');
const zlib = require('zlib');
const { join } = require('path');

module.exports = (app, config, controller) => {

    app.use(bodyparser.urlencoded({ extended: true }));
    app.use(bodyparser.json());

    const numerify = (num) => parseInt(num, 10);

    app.get('/v1/sync/add/:op1/:op2', (req, res) => {
      const op1 = numerify(req.params.op1);
      const op2 = numerify(req.params.op2);
      const response = {
        add: controller.sync.add(op1, op2)
      };
      res.json(response);
    });

    app.get('/v1/sync/multiply/:op1/:op2', (req, res) => {
      const op1 = numerify(req.params.op1);
      const op2 = numerify(req.params.op2);
      const response = {
        add: controller.sync.multiply(op1, op2)
      };
      res.json(response);
    });

    app.get('/v1/async/callback/add/:op1/:op2', (req, res) => {
      const op1 = numerify(req.params.op1);
      const op2 = numerify(req.params.op2);
      controller.async.callbacks.add(op1, op2, (err, result) => {
        if (err) return res.status(400);
        res.json({ add: result });
      });
    });

    app.get('/v1/async/promise/add/:op1/:op2', (req, res) => {
      const op1 = numerify(req.params.op1);
      const op2 = numerify(req.params.op2);
      controller.async.promises.add(op1, op2)
        .then((result) => res.json({ add: result }))
        .catch((err) => res.status(400));
    });

    app.get('/v1/async/callback/audit', (req, res) => {
      res.sendFile(join(__dirname, '..', 'audit.txt'));
    });

    app.get('/v1/async/promise/audit', (req, res) => {
      res.sendFile(join(__dirname, '..', 'audit-promises.txt'));
    });

    app.get('/v1/async/stream/slow-audit', (req, res) => {
      fs.readFile(join(__dirname, '..', 'massive.txt'), (err, data) => {
        if (err) throw err;
        res.end(data);
      });
    });

    app.get('/v1/async/stream/fast-audit', (req, res) => {
      const src = fs.createReadStream(join(__dirname, '..', 'massive.txt'));
      src.pipe(res);
    });

    app.post('/v1/async/stream/copy-audit', (req, res) => {
      const src = fs.createReadStream(join(__dirname, '..', 'massive.txt'));
      src
      .on('data', () => process.stdout.write('.'))
      .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream('massive.zz'))
      .on('finish', () => {
        console.log('Done');
        res.sendStatus(200);
      });
    });
};
