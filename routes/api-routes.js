var db = require("../db/db.js");


module.exports = function(app) {
    app.get('/api/notes', function (req, res) {
        res.json(db);
    });
    app.post('/api/notes', function (req, res) {
        // need to write a function to add input to db.js. Push into the array.
        var request = req.body
        db.push(request);
        res.json(db);
    });
}