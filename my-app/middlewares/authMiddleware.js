const jwt = require('jsonwebtoken');

exports.requireAuth = (req, res, next) => {
const token = req.headers['x-access-token'];
if (!token) {
    return res.status(401).json({ message: 'No token provided' });
}
jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
    return res.status(401).json({ message: 'Invalid token' });
    }
    req.decoded = decoded;
    next();
});
};
