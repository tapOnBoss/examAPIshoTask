// middleware/logging.js
module.exports = (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date()}`);
    next();
};