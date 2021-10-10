const GameController = require("../controller/game")


module.exports = function(app, path)
{
    app.get(path+"/random",(req,res) =>{
        res.status(200).send(GameController.getRandomWord())
    })

    app.get(path+"/availableWords",(req,res) =>{
        res.status(200).send(GameController.getAvailableWord())
    })
}
