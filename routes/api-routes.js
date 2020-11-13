//const db = require("../models");
const mongoose = require("mongoose");

module.exports = function(app){
    app.get("/api/workout", function(req, res){
        res.json(req.workouts)
    })
}
