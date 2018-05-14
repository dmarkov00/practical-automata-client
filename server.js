const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist/practical-automata-client')));

app.listen(process.env.PORT || 8080);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/practical-automata-client/index.html'));
});

console.log("Express server running");
