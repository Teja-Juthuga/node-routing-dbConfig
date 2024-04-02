const express = require('express');

var UserRegisteration = require('./routes/userRegisteration');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', UserRegisteration);

app.listen(8085, () =>{
    console.log("Server is running at http://localhost:8085");
})
