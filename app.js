const path = require('path');

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'welcome.html');
  res.sendFile(filePath);
});

app.get('/etudiant/1', (req, res) => {
    res.json({
        id: 1,
        name: "Alain",
        age: 22
    });
});

app.get('/etudiant/2', (req, res) => {
    res.json({
        id: 2,
        name: "Céline",
        age: 40
    });
});

module.exports = app;