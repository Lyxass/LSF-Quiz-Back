const Media = require("../model/media")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports = {
    /**
     * Intro
     * @param1
     * @returns {{data:String}} Must return an object with attribute data. this attribute must contain the result of the function
     *      ex : {data : "bonjour"}
     * @since 1.0.0
     * @version 1.1.0
     */
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
