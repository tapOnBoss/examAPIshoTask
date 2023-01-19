const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/myapp';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
console.log(Successfully connected to ${dbURI});
});

module.exports = db;