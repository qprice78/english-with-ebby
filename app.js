//jshint esversion:6
const bodyParser = require("body-parser");
const express    = require("express");
const app        = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

























app.listen(3000, function(){
    console.log("Server is running on port 3000");
    
});