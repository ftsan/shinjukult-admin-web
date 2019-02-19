const express = require("express");
const auth = require('./auth');

const app = express();
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log("Node.js is listening to PORT:" + PORT));

app.use(express.static('public'));
