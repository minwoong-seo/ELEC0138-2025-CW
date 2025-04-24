const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// app.use(cors({
//     origin: 'http://banklogin.tst',
//     methods: 'POST'
// }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = {
    'admin': 'admin'
};

app.post('/api/auth/login', async (req, res) => {
    console.log("request body", req.body);
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        // Auth Success
        res.status(200).json({ message: 'Login successful!' });
    } else {
        // Auth Fail
        res.status(401).json({ message: 'Login failed. Invalid username or password.' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


