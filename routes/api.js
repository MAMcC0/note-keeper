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
})