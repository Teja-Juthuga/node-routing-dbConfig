const express = require('express');

var UserRegisteration = require('./routes/userRegisteration');
var cors = require('cors');
const app = express();
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', UserRegisteration);

app.listen(8085, () =>{
    console.log("Server is running at http://localhost:8085");
})
