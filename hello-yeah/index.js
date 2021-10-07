const express = require("express");
const app = express;
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000  || process.env.port;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port, ()=> {
    console.log(`app is listening on http://localhost:${port}..`);
})