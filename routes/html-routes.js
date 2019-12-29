var path = require("path");

//see video at 10:30 for html routes
module.exports = function (app) {
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/notes.html"));
    })
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    })
}