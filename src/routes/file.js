const fs = require("fs")

module.exports = function(app, path)
{
    app.get(path+"/getVideo/:name",(req,res) =>{
        const checkForWord = RegExp('^[a-zA-Zéêèçôîûâ]*$');
        if(!checkForWord.exec(req.params.name))
            res.status(400).send("Invalid Request")
        if(fs.existsSync(process.env.PWD+process.env.VIDEOS_PATH+req.params.name+".mp4")){
            res.status(404).send("File not found")
        }
        res.sendFile(process.env.VIDEOS_PATH+req.params.name+".mp4", {root : process.env.PWD})
    })

    app.get(path+"/getPicture/:name",(req,res) =>{
        const checkForWord = RegExp('^[a-zA-Zéêèçôîûâ]*$');
        if(!checkForWord.exec(req.params.name)) {
            res.status(400).send("Invalid Request")
        }
        if(fs.existsSync(process.env.PWD+process.env.IMAGES_PATH+req.params.name+".png")){
            res.status(404).send("File not found")
        }
        res.sendFile(process.env.PWD+process.env.IMAGES_PATH+req.params.name+".png", {root : process.env.PWD})
    })

}
