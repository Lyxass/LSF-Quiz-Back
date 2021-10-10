const Media = require("../model/media")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    getRandomWord(){
        liste = Media.getAllavailableWord()
        rnd = getRandomInt(liste.length)
        response = {
            data: liste[rnd]
        }
        return response
    },

    getAvailableWord(){
        return Media.getAllavailableWord()
    }
}
