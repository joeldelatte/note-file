var bodyParser = require("body-parser");
var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.get('*', function (req, res) {
    res.send("Hello World");
})

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use(function (req,res) {
    res.setHeader("Content-Type", "text/plain")
    res.write("You posted: \n")
    res.end(JSON.stringify(eq.body, null, 2))
})

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});