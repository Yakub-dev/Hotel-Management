// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const verifyToken = (roles = []) => {
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Format: Bearer TOKEN

        if (!token) return res.status(401).json({ message: 'Access denied! No token provided' });

        try {
            const decoded = jwt.verify(token, 'mysecretkey');
            req.user = decoded;

            // If roles array is provided, check if user's role is allowed
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Forbidden! Insufficient role' });
            }

            next(); // ✅ Continue to the protected route
        } catch (err) {
            res.status(400).json({ message: 'Invalid token!' });
        }
    };
};

module.exports = verifyToken;
