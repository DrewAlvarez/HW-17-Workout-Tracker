let db = require("../models");
let mongoose = require("mongoose");

module.exports = function(app){
    app.post("/api/workouts", function({ body }, res){
        db.Workout.create(body)
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(400).json(err);
        });
    });

    app.get("/api/workouts", function(req, res){
        db.Workout.find({})
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(400).json(err);
        });        
    });

    app.put("/api/workouts/:id", function(req, res){
        db.Workout.findOneAndUpdate({
            _id: req.params.id
        },
        {
            $push: {exercises: req.body}
        },
        {
            new: true,
            runValidators: true
        })
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(400).json(err);
        }); 
    });

    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({}).sort({ day: -1}).limit(10).then(data => res.json(data)
        ).catch(err => {
            res.status(400).json(err);
        });
    });
}
