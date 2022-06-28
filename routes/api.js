const notes = require('express').Router();
const fs = require('fs');
var uuid = require('uuid');


// GET Route for retrieving all notes
notes.get('/api/notes', (req, res) => {
   fs.readFile("../db/db.json", 'utf-8', (err, data)) 
    .then((data) => res.json(JSON.parse(data)));
})

//POST Route for a new note
notes.post('/api/notes', (req,res) => {
    console.log(req.body)

    const {title, note} = req.body;
//creates object from input data for note to be stored with an id 
    if(req.body){
        const newNote = {
            title,
            note,
            note_id: uuid,
        };
    //read the file db to pull in into code then append with the new note
        fs.readFile('../db/db.json', 'utf-8', (err, data) => {
            if (err){
                console.err(err);
            } else {
                const parsedNote = JSON.parse(data);
                parsedNote.push(newNote);
                fs.writeFile('../db/db.json', JSON.stringify(newNote, null, 4), (err) =>
                err ? console.error(err) : console.log(`\n Data written to db file!`));
            }
        })
    
    
    
    }


})


module.exports = notes;