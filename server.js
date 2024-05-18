const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/imprint', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'imprint.html'));
});

app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});