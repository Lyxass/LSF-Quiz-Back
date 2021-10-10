const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

require("./routes/game.js")(app,"/game")
require("./routes/file.js")(app,"/file")

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
