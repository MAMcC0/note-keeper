const { application } = require('express');
const express = require('express');
const path = require ('node:path')
const api = require('./routes/api');

const PORT = process.env.port || 3001;

const app = express();


app.use(express.json());

//do we have to use middleware for urlencoded form data?
app.use('api/notes', api);

app.use(express.static('public'));



//GET Route for landing page
app.get('/', (req,res)=>
res)