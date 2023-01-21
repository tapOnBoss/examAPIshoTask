// i18n/index.js
const i18n = require('i18n');

i18n.configure({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  directory: __dirname + '/locales',
});

module.exports = i18n;
