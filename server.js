var bodyParser = require("body-parser");
var express = require("express");
var fs = require("fs");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

require("./routes/api-routes.js")(app); 
require("./routes/html-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
