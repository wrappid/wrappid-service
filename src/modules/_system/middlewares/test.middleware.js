const testMiddleware = (req, res, next) => {
    try {
        console.log("Test middleware called successfully!");

        next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = testMiddleware;