const app = require("./v1.js")

app.listen(process.env.PORT, () => {
    console.log("API is running on ", process.env.PORT," port");
});