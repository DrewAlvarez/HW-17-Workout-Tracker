//const db = require("../models");
var path = require("path");
const mongoose = require("mongoose");

module.exports = function(app){
    app.get("/exercise", function(req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}