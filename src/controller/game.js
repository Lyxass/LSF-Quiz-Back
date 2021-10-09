const Media = require("../model/media")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    getRandomWord(){
        liste = Media.getAllavailableWord()
        rnd = getRandomInt(liste.length)
        return liste[rnd]
    },

    getAvailableWord(){
        return Media.getAllavailableWord()
    }
}
