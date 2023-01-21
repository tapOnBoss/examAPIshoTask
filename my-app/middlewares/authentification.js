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


const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send({ message: 'No token provided' });
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send({ message: 'Invalid token' });
    }
};
