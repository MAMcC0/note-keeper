const express = require('express');
const api = require('./routes/api');
const htmlRoutes  = require("./routes/htmlRoutes")

const PORT = process.env.PORT || 3001;

const app = express();


app.use(express.json());

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use('/api', api);
app.use("/", htmlRoutes)




//GET Route for notes page


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`));