const Media = require("../model/media")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    getRandomWord(){
        liste = Media.getAllavailableWord()
        if(liste.length <= 0){
            return null
        }
        rnd = getRandomInt(liste.length)
        response = {
            data: liste[rnd]
        }
        console.log(response)
        return response
    },

    getAvailableWord(){
        return Media.getAllavailableWord()
    },

    getRandomLetter(){
        rnd = getRandomInt(25)
        return {
            data: String.fromCharCode(rnd+97)
        }

    }
}
