var db = require("../db/db.js");

module.exports = function(app) {
    app.get('/api/db', function (req, res) {
        res.json(db)
    })
}