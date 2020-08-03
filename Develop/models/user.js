const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    }
});

const workoutLogSchema = new Schema({
    day: {
        type: Date,
    },
    excercises: [excerciseSchema]
});

const WorkoutLog = mongoose.model('Workout Log', workoutLogSchema);

module.exports = WorkoutLog; 