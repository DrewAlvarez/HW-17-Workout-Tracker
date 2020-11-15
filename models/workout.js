let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let workoutSchema = new Schema(
    {
        day: {
            type: Date,
            deafult: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                duration: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;