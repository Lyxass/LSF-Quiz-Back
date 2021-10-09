const GameController = require("../controller/game")


module.exports = function(app, path)
{
    app.get(path+"/random",(req,res) =>{
        res.send(GameController.getRandomWord())
    })

    app.get(path+"/availableWords",(req,res) =>{
        res.send(GameController.getAvailableWord())
    })
}
