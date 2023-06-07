const testMiddleware = (req, res, next) => {
    try {
        // logger implementation pending
        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = testMiddleware;