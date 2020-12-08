const express = require("express")
const hbs = require("express-handlebars")
const fs = require("fs")

const config = JSON.parse(fs.readFileSync("config.json", "utf8"))
const app = express()


app.set("view engine", "hbs"); 
app.set("views", __dirname + "/views")
app.engine('hbs', hbs({
    layoutsDir: __dirname + "/views/layouts",
    extname: 'hbs',
    defaultLayout: 'base'
}));

app.get("/", (req, res) => {
    res.render("index", {"title": "TESTING"})
})

app.get("/ceasar", (req, res) => {
    res.render("index", {"title": "TESTING 2 ELECTRIC BOOGALOOO"})
})

app.listen(config["webServer_port"], () => {
    console.log(`App running on http://localhost:${config['webServer_port']}`)
})