const fs = require('fs');
const path = require('path');
console.log("routes");
module.exports = app => {
    fs.readFile("db/db.json","utf8", (err, data) => {
    var notes = JSON.parse(data);
    
    function update(){
        fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
                if (err) throw err;
                return true;
            });
        }
    

    app.get("/api/notes", function (req, res) {
        res.json(notes);
    });

    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        noteNew.id = notes[notes.length - 1].id + 1;
        notes.push(newNote);
        update();
        console.log("Added note");
        return 
    });

    app.get("/api/notes/:id", function(req,res) {
        res.json(notes[req.params.id]);
    });

    app.delete("/api/notes/:id", function(req, res) {
        notes.splice(req.params.id, 1);
        update();
        console.log("Deleted note");
    });
    app.get('/notes', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
        
    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });    

    });
}