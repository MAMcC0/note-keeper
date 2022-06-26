const express = require('express');
const path = require ('node:path')
const api = require('./routes/api');

const PORT = process.env.port || 3001;

const app = express();


app.use(express.json());

//do we have to use middleware for urlencoded form data?
app.use('/api', api);

app.use(express.static('public'));



//GET Route for landing page
app.get('*', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
    );

//GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
    );


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`));