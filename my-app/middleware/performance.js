// middleware/performance.js
const performance = require('express-performance');

module.exports = performance({
  thresholds: {
    render: '50ms',
    write: '10ms',
    end: '100ms'
  }
});
