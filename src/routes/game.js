const GameController = require("../controller/game")

module.exports = function (app, path) {

    app.get(path + "/random-word", (req, res) => {
        res.status(200).send(GameController.getRandomWord())
    })

    app.get(path + "/available-words", (req, res) => {
        res.status(200).send(GameController.getAvailableWord())
    })

    app.get(path + "/random-letter", (req, res) => {
        res.status(200).send(GameController.getRandomLetter())
    })

}
