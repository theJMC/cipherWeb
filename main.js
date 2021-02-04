const { response } = require("express");
const express = require("express")
const hbs = require("express-handlebars")
const fs = require("fs")
const request = require('request');


const config = JSON.parse(fs.readFileSync("config.json", "utf8"))
const app = express()


const tabs = {
    "home": false,
    "ceasar": false,
    "vigenere": false
};

app.set("view engine", "hbs"); 
app.set("views", __dirname + "/views")
app.engine('hbs', hbs({
    layoutsDir: __dirname + "/views/layouts",
    extname: 'hbs',
    defaultLayout: 'base'
}));

app.use(express.static('public'))

app.get("/", (req, res) => {
    lTabs = JSON.parse(JSON.stringify(tabs))
    lTabs["home"] = true
    res.render("index", {"title": "James Cipher System", "tabs": lTabs})
})

app.get("/ceasar", (req, res) => {
    lTabs = JSON.parse(JSON.stringify(tabs))
    lTabs["ceasar"] = true
    res.render("ceasar", {"title": "JCS - Ceasar", "tabs": lTabs})
})

app.get("/vigenere", (req, res) => {
    lTabs = JSON.parse(JSON.stringify(tabs))
    lTabs["vigenere"] = true
    res.render("vigenere", {"title": "JCS - Vigenere", "tabs": lTabs})
})

app.get("/api/:cipher/:method/:input/:shift", (req, res) => { 
    var url = config['API_URL'] + `/${req.params['cipher']}/${req.params['method']}/${req.params['input']}/${req.params['shift']}`
    console.log(url)

    request(url, { json: true}, (err, res, body) => {
        if (err) {return console.log(err)}
        console.log(res)
        console.log(body.explaination)
    })

    var test = 'TESTING2 '
    res.send(test)
})


app.listen(config["webServer_port"], () => {
    console.log(`App running on http://localhost:${config['webServer_port']}`)
})