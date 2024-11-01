const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const secretKey = 'Qqwerty1!';

app.post('/register', (req, res) => {
    const { phone_number, name, email, newpassword, surname, gender, password } = req.body;
    const token = jwt.sign({ phone_number, name, email }, secretKey, { expiresIn: '1h' });
    res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
