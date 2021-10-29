const fs = require("fs")
const path = require('path')

module.exports = {
    getAllavailableWord() {
        let availableWord = [];
        fs.readdirSync(process.env.VIDEOS_PATH).forEach(file => {
            file = path.parse(file).name
            availableWord.push(file)
        })
        return availableWord
    },


}
