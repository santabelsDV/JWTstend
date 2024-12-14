const express = require('express');
const app = express();
const {verifyToken} = require('./JWT/verifyToken');
const {generateToken} = require('./JWT/Generation');

app.use(express.json());

app.use('/protected-route', verifyToken, (req, res) => {
    res.send('Це заповідний маршрут');
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    const userId = 123;

    const token = generateToken(userId);
    console.log(generateToken(userId));

    res.json({token});
});


app.get('/profile', verifyToken, (req, res) => {
    res.json({userId: req.user.userId});
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});