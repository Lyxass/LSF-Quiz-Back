module.exports = function(app, path)
{
    app.get(path+"/getVideo/:name",(req,res) =>{
        console.log(req.params.name)
        const checkForWord = RegExp('^[a-zA-Z]*$');
        if(!checkForWord.exec(req.params.name))
            res.status(400).send("Invalid Request")
        res.sendFile(process.env.MEDIA_PATH+req.params.name+".mp4", {root : process.env.PWD})
    })

}
