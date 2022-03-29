const express = require("express");
const app = express;
const cors = require('cors');

const PORT = "5000"  || process.env.PORT;
const DB_URI = "{IMPORT HERE}";

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Database connected successfully!");
    })
    .catch((error)=>{
        console.log(error);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.listen(port, ()=> {
    console.log(`app is listening on http://localhost:${port}..`);
})