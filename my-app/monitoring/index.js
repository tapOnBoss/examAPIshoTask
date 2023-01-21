// monitoring/index.js
const Prometheus = require('prom-client');
const express = require('express');
const app = express();

app.use(Prometheus.middleware);
app.get('/metrics', (req, res) => {
  res.set('Content-Type', Prometheus.register.contentType);
  res.end(Prometheus.register.metrics());
});

module.exports = app;
