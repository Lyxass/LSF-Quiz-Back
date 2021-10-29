const GameController = require("../controller/game")

module.exports = function (app, path) {

module.exports = function(app, path)
{
    app.get(path+"/random-word",(req,res) =>{
        let response = GameController.getRandomWord()
        if(response === null){
            res.status(500).send({error:"Internal Error"})
        }
        res.status(200).send(response)
    })

    app.get(path + "/available-words", (req, res) => {
        res.status(200).send(GameController.getAvailableWord())
    })

    app.get(path+"/random-letter",(req,res) =>{
        let response = GameController.getRandomLetter()
        if(response === null){
            res.status(500).send({error:"Internal Error"})
        }
        res.status(200).send(response)
    })
}
