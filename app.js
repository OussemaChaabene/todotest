const express = require('express');
const mongo=require('mongoose');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());


app.use("/", require("./routes/taches-routes"));
var app=express();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});