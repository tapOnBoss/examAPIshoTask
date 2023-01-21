// middleware/caching.js
const cache = new Map();

module.exports = (duration) => {

    return (req, res, next) => {

        const key = req.originalUrl || req.url;
        const cachedBody = cache.get(key);

        if (cachedBody) {
            res.send(cachedBody);
            return;}
            res.sendResponse = res.send;
            res.send = (body) => {
                cache.set(key, body, duration * 1000);
                res.sendResponse(body);
            };
            next();
        };
};
