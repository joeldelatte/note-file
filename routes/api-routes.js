var db = require("../db/db.json");
var fs = require("fs");



module.exports = function(app) {
    app.get('/api/notes', function (req, res) {
        res.send(db);
    });
    app.post('/api/notes', function (req, res) {
        const note = {
            title: req.body.title,
            text: req.body.text,
            // id: `${db.length +1}`
            id: db.length +1
        };

        db.push(note);
        res.send(note);
        fs.writeFile('./db/db.json', JSON.stringify(db), (err)=>console.log(err));

    })
    app.get('/api/notes/:id', function(req, res) {
            const note = db.filter((n => n.id === req.params.id));
            console.log(note);
            res.send(note);
        });
    
    

    
}

