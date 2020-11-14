const Workout = require("../models");
const mongoose = require("mongoose");

module.exports = function(app){
    app.get("/api/workouts", function(req, res){
        Workout.find({})
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(400).json(err);
        });        
    });

    app.post("/api/workouts", function({ body }, res){
        Workout.create(body)
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(400).json(err);
        });
    });
}
