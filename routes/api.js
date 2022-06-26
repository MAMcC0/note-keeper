const notes = require('express').Router();
const fs = require('fs');
var uniqid = require('uniqid');


// GET Route for retrieving all notes
notes.get('/api/notes', (req, res) => {
   fs.readFile("./db/db.json", 'utf-8', (err, data)) 
    .then((data) => res.json(JSON.parse(data)));
})

//POST Route for a new note
notes.post('/api/notes', (req,res) => {
    console.log(req.body)

    const {title, note} = req.body;

    if(req.body){
        const newNote = {
            title,
            note,
            note_id: uniqid.time(),
        };
    
        fs.readFile('./db/db.json', 'utf-8', (err, data) => {
            if (err){
                console.err(err);
            } else {
                const parsedNote = JSON.parse(data);
                parsedNote.push(newNote);
                fs.writeFile('./db/db.json', JSON.stringify(newNote, null, 4), (err) =>
                err ? console.error(err) : console.log(`\n Data written to db file!`));
            }
        })
    
    
    
    }


})


module.exports = notes;