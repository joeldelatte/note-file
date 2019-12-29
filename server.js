var bodyParser = require("body-parser");
var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});