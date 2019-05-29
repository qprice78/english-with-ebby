//jshint esversion:6
const bodyParser = require("body-parser");
const express    = require("express");
const app        = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// G E T    R O U T E S

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/booking", function(req, res){
    res.render("booking");
});

app.get("/courses", function(req, res){
    res.render("courses");
});

app.get("/email", function(req, res){
    res.render("email");
});
























app.listen(3000, function(){
    console.log("Server is running on port 3000");
    
});