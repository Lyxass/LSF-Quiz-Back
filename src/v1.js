const express = require('express');
const app = express();
var cors = require('cors');
const port = 3000;

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('API is working !');
})

require("./routes/game.js")(app,"/game");
require("./routes/file.js")(app,"/file");

module.exports = app;
