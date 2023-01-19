const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '24h' });
};

exports.requireAuth = (req, res, next) => {
  // handle authentication logic
};
