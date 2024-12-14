// JWT/Generation.js

const jwt = require('jsonwebtoken');
require('dotenv').config();  // для роботи з .env файлами

const generateToken = (userId) => {
    const payload = { userId };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
};

module.exports = { generateToken };  // Експортуємо як об'єкт
