let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
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
        ],
        totalDuration: Number
});

workoutSchema.methods.setTotalDuration = function() {
    let sum = 0;
    for(var i = 0; i < this.exercises.length; i++){
        sum += this.exercises[i].duration;
        return sum;
    }
    this.totalDuration = sum;
    // this.exercises.foreach(function(item){sum += item.duration});
    return this.totalDuration;
}

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;