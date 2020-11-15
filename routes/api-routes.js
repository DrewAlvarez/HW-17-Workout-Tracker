let db = require("../models");
let mongoose = require("mongoose");

module.exports = function(app){
    app.get("/api/workouts", function(req, res){
        db.Workout.find({})
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(400).json(err);
        });        
    });

    app.post("/api/workouts", function({ body }, res){
        db.Workout.create(body)
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(400).json(err);
        });
    });

    app.put("/api/workouts/:id", function({ params }, res){
        db.Workout.updateOne({
            _id: mongojs.ObjectId(params.id)
        },
        {
            complete: params.complete
        })
        .then(function(dbWorkout){
            res.json(dbWorkout);
        })
        .catch(function(err){
            res.status(400).json(err);
        }); 
    });
}
